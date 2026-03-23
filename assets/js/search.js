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
		return String(text).replace(re, '<mark style="background:none;color:#c00;font-weight:700;padding:0">$1</mark>');
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

				html += '<li class="card card--list" style="margin-bottom:.75rem">';
				html += '<a href="' + (window.baseurl || '') + item.url.trim() + '" style="display:flex;align-items:flex-start;gap:.75rem;text-decoration:none;color:inherit">';
				html += '<span style="display:flex;align-items:flex-start">' + PKG_ICON + '</span>';
				html += '<div style="min-width:0;flex:1">';
				html += '<h3 style="font-size:1em;font-weight:600;margin:0 0 .2rem;color:#222">' + hl(item.title, query) + '</h3>';
				if (desc) {
					html += '<p style="font-size:.82em;color:#777;margin:0 0 .25rem;line-height:1.35">' + hl(desc, query) + '</p>';
				}
				if (keywords.length) {
					html += '<div class="package-keywords" style="margin-top:.2rem">';
					keywords.slice(0, 4).forEach(function(kw) {
						html += '<span class="keyword">' + kw + '</span>';
					});
					html += '</div>';
				}
				html += '</div></a></li>';
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
