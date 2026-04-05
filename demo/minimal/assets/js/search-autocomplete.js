(function () {
  'use strict';

  var cache = null; // package index cache

  // ─── fetch + cache the JSON index ───────────────────────────────────────
  function loadIndex(cb) {
    if (cache !== null) { cb(cache); return; }
    var base = (window.baseurl || '').replace(/\/$/, '');
    fetch(base + '/packages.json')
      .then(function (r) { return r.ok ? r.json() : []; })
      .then(function (data) { cache = Array.isArray(data) ? data : []; cb(cache); })
      .catch(function () { cache = []; cb(cache); });
  }

  // ─── relevance score ────────────────────────────────────────────────────
  function score(pkg, q) {
    var t  = (pkg.title       || '').toLowerCase();
    var d  = (pkg.description || '').toLowerCase();
    var kw = (Array.isArray(pkg.keywords) ? pkg.keywords : []).join(' ').toLowerCase();
    if (t === q)           return 100;
    if (t.startsWith(q))  return 80;
    if (t.includes(q))    return 60;
    if (kw.includes(q))   return 40;
    if (d.includes(q))    return 20;
    return 0;
  }

  function runSearch(q) {
    return cache
      .map(function (p) { return { p: p, s: score(p, q) }; })
      .filter(function (x) { return x.s > 0; })
      .sort(function (a, b) { return b.s - a.s; })
      .slice(0, 8)
      .map(function (x) { return x.p; });
  }

  // ─── highlight matching letters ─────────────────────────────────────────
  function hl(text, q) {
    if (!text || !q) return text || '';
    var safe = q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    return String(text).replace(new RegExp('(' + safe + ')', 'gi'), '<mark>$1</mark>');
  }

  // ─── render one result row ───────────────────────────────────────────────
  var PKG_ICON =
    '<svg class="pkgac-icon" viewBox="0 0 40 40" fill="currentColor" aria-hidden="true">' +
      '<polygon points="20,4 36,13 20,22 4,13"/>' +
      '<polygon points="4,13 4,27 20,36 20,22" opacity=".6"/>' +
      '<polygon points="36,13 36,27 20,36 20,22" opacity=".82"/>' +
      '<polygon points="4,13 4,15.2 20,24.2 36,15.2 36,13 20,22" fill="white" opacity=".22"/>' +
      '<polygon points="19,22 21,22 21,36 19,36" fill="white" opacity=".18"/>' +
    '</svg>';

  function rowHTML(pkg, q, base) {
    var desc = (pkg.description || '');
    if (desc.length > 80) desc = desc.slice(0, 80) + '\u2026';
    return (
      '<a class="pkgac-item" href="' + base + pkg.url + '" tabindex="-1">' +
        PKG_ICON +
        '<span class="pkgac-text">' +
          '<span class="pkgac-title">' + hl(pkg.title, q) + '</span>' +
          (desc ? '<span class="pkgac-desc">' + hl(desc, q) + '</span>' : '') +
        '</span>' +
      '</a>'
    );
  }

  // ─── attach to one input ────────────────────────────────────────────────
  function attach(input) {
    var form = input.closest('form');
    if (!form || form.dataset.pkgac) return;
    form.dataset.pkgac = '1';

    var drop = document.createElement('div');
    drop.className = 'pkgac-dropdown';
    form.appendChild(drop);

    var timer   = null;
    var active  = -1;
    var base    = (window.baseurl || '').replace(/\/$/, '');

    function items() { return drop.querySelectorAll('.pkgac-item'); }

    function show(results, q) {
      if (!results.length) { hide(); return; }
      drop.innerHTML = results.map(function (p) { return rowHTML(p, q, base); }).join('');
      drop.style.display = 'block';
      input.style.borderBottomLeftRadius = '0';
      input.style.borderBottomRightRadius = '0';
      active = -1;
    }

    function hide() {
      drop.style.display = 'none';
      input.style.borderBottomLeftRadius = '';
      input.style.borderBottomRightRadius = '';
      active = -1;
    }

    function setActive(n) {
      var els = items();
      if (!els.length) return;
      if (n < 0) n = els.length - 1;
      if (n >= els.length) n = 0;
      els.forEach(function (el, i) { el.classList.toggle('pkgac-active', i === n); });
      active = n;
    }

    // input event — debounced
    input.addEventListener('input', function () {
      clearTimeout(timer);
      var q = this.value.trim();
      if (q.length < 2) { hide(); return; }
      timer = setTimeout(function () {
        loadIndex(function () { show(runSearch(q), q); });
      }, 130);
    });

    // re-show on focus if query already present
    input.addEventListener('focus', function () {
      var q = this.value.trim();
      if (q.length >= 2) {
        loadIndex(function () { show(runSearch(q), q); });
      }
    });

    // keyboard navigation
    input.addEventListener('keydown', function (e) {
      if (drop.style.display === 'none') return;
      if (e.key === 'ArrowDown')  { e.preventDefault(); setActive(active + 1); return; }
      if (e.key === 'ArrowUp')    { e.preventDefault(); setActive(active - 1); return; }
      if (e.key === 'Escape')     { hide(); return; }
      if (e.key === 'Enter' && active >= 0) {
        e.preventDefault();
        var link = items()[active];
        if (link) window.location.href = link.href;
      }
    });

    // close on outside click
    document.addEventListener('click', function (e) {
      if (!form.contains(e.target)) hide();
    }, true);
  }

  // ─── init: attach to all search inputs, preload index ───────────────────
  function init() {
    document.querySelectorAll('input[type="search"]').forEach(attach);
    loadIndex(function () {}); // warm up cache silently
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
