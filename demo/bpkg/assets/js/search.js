(function () {
	var PKG_ICON =
		'<svg viewBox="0 0 40 40" fill="currentColor" aria-hidden="true" style="width:28px;height:28px;flex-shrink:0;color:#888;margin-top:2px">' +
			'<polygon points="20,4 36,13 20,22 4,13"/>' +
			'<polygon points="4,13 4,27 20,36 20,22" opacity=".6"/>' +
			'<polygon points="36,13 36,27 20,36 20,22" opacity=".82"/>' +
			'<polygon points="4,13 4,15.2 20,24.2 36,15.2 36,13 20,22" fill="white" opacity=".22"/>' +
			'<polygon points="19,22 21,22 21,36 19,36" fill="white" opacity=".18"/>' +
		'</svg>';

	function getQueryVariable(variable) {
		var query = window.location.search.substring(1),
			vars = query.split("&");
		for (var i = 0; i < vars.length; i++) {
			var pair = vars[i].split("=");
			if (pair[0] === variable) {
				return decodeURIComponent(pair[1].replace(/\+/g, '%20')).trim();
			}
		}
	}

	function hl(text, query) {
		if (!text || !query) return text || '';
		var parts = query.trim().split(/\s+/).filter(Boolean);
		var re = new RegExp('(' + parts.map(function(p) {
			return p.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
		}).join('|') + ')', 'gi');
		return String(text).replace(re, '<mark>$1</mark>');
	}

	function esc(text) {
		return String(text || '').replace(/[&<>"']/g, function(ch) {
			return {
				'&': '&amp;',
				'<': '&lt;',
				'>': '&gt;',
				'"': '&quot;',
				"'": '&#39;'
			}[ch];
		});
	}

	function displaySearchResults(results, query) {
		var listEl = document.getElementById("package-list"),
			processEl = document.getElementById("search-process");

		if (results.length) {
			var html = '<ul style="list-style:none;padding:0;margin:0">';
			results.forEach(function (result) {
				var item = window.data[result.ref];
				if (!item) return;
				var desc = (item.description || '').substring(0, 120);
				var keywords = Array.isArray(item.keywords) ? item.keywords : [];

				html += '<li class="card card--list">';
				html += '<a class="card--list__link" href="' + (window.baseurl || '') + item.url.trim() + '" aria-label="Open ' + esc(item.title) + '"></a>';
				html += '<div class="card--list__content">';
				html += '<span class="align-items-center mr-2">' + PKG_ICON + '</span>';
				html += '<div>';
				html += '<h3 class="text-md mb-1">' + hl(item.title, query) + '</h3>';
				if (desc) {
					html += '<p class="text-sm m-0" style="margin-bottom:.25rem">' + hl(desc, query) + '</p>';
				}
				if (keywords.length) {
					html += '<div class="package-keywords" style="margin-top:.2rem">';
					keywords.slice(0, 4).forEach(function(kw) {
						html += '<a class="keyword" href="' + (window.baseurl || '') + '/search/?q=' + encodeURIComponent(kw) + '">' + esc(kw) + '</a>';
					});
					html += '</div>';
				}
				html += '</div></div></li>';
			});
			html += '</ul>';

			listEl.innerHTML = html;
			processEl.innerText = results.length + ' result' + (results.length !== 1 ? 's' : '');
		} else {
			listEl.innerHTML = '';
			processEl.innerText = 'No results';
		}
	}

	window.index = lunr(function () {
		this.field("id");
		this.field("title", { boost: 10 });
		this.field("categories", { boost: 5 });
		this.field("keywords", { boost: 5 });
		this.field("url");
		this.field("content");
	});

	var query = decodeURIComponent((getQueryVariable("q") || "").replace(/\+/g, "%20")),
		queryContainerEl = document.getElementById("search-query-container"),
		queryEl = document.getElementById("search-query");

	if (queryEl) queryEl.innerText = query;
	if (queryContainerEl) queryContainerEl.style.display = "inline";

	for (var key in window.data) {
		window.index.add(window.data[key]);
	}

	document.addEventListener("DOMContentLoaded", function () {
		displaySearchResults(window.index.search(query), query);
	});
})();
