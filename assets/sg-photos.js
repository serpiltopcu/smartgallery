/* Smart Gallery - mockup örnek fotoğrafları
   Kullanım: index.html'de </body> öncesine ekle:
   <script src="/assets/sg-photos.js"></script>
   Script çalışmazsa kutular eski gradient halinde kalır. */
(function () {
  function R(x, y, w, h, f, e) {
    return '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="' + f + '"' + (e || '') + '/>';
  }
  function BG(f) { return R(-40, -40, 280, 340, f); }
  function G(id, a, b, c) {
    return '<defs><linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + a + '"/>' +
      (c ? '<stop offset=".5" stop-color="' + c + '"/>' : '') + '<stop offset="1" stop-color="' + b + '"/></linearGradient></defs>';
  }
  var T = ' font-family="sans-serif"';

  var S = {
    sunset: function (d) {
      return G('a', '#3b2a6e', '#ffb35c', '#e8647a') + BG('url(#a)') +
        '<circle cx="' + (100 + d) + '" cy="168" r="34" fill="#ffe29a"/>' +
        R(-40, 172, 280, 130, '#2b2355') + R(88 + d, 174, 24, 70, '#ffd27a', ' opacity=".5"') +
        '<path d="M30 70q8-8 16 0q8-8 16 0M150 50q6-6 12 0q6-6 12 0" stroke="#2b2355" stroke-width="2" fill="none"/>';
    },
    sea: function () {
      return G('a', '#7ec8ff', '#e4f5ff') + BG('url(#a)') + '<circle cx="150" cy="60" r="20" fill="#fff6c8"/>' +
        G('b', '#2a8ae0', '#0b3f8a') + R(-40, 150, 280, 150, 'url(#b)') +
        '<path d="M10 200q15-8 30 0t30 0t30 0t30 0t30 0M-10 230q15-8 30 0t30 0t30 0t30 0t30 0t30 0" stroke="#bfe4ff" stroke-width="2" fill="none" opacity=".7"/>' +
        '<path d="M70 168h60l-10 14H80z" fill="#fff"/><path d="M100 110v56l-28-6z" fill="#fff"/><path d="M104 120v46l22-6z" fill="#ffd27a"/>';
    },
    mountain: function () {
      return G('a', '#9ad0ff', '#eaf6ff') + BG('url(#a)') +
        '<polygon points="-40,200 40,110 90,170 130,100 240,210 240,300 -40,300" fill="#8fa6c9"/>' +
        '<polygon points="-40,240 60,150 120,230 190,160 240,250 240,300 -40,300" fill="#4d6a8f"/>' +
        '<polygon points="40,110 28,135 52,135" fill="#fff"/><polygon points="130,100 116,128 144,128" fill="#fff"/>' +
        R(-40, 232, 280, 70, '#3f8a56');
    },
    city: function () {
      var h = [120, 170, 100, 150, 190, 110, 160, 130], s = G('a', '#0d1530', '#3a2b6e') + BG('url(#a)') +
        '<circle cx="150" cy="55" r="14" fill="#f5f1d0"/>', i, j, x, y;
      for (i = 0; i < 8; i++) {
        x = i * 26 - 4; y = 260 - h[i];
        s += R(x, y, 24, h[i] + 40, '#141c3f');
        for (j = 0; j < h[i] / 18 - 1; j++) {
          s += R(x + 4, y + 8 + j * 16, 5, 7, (i + j) % 3 ? '#ffd76a' : '#2a3566');
          s += R(x + 14, y + 8 + j * 16, 5, 7, (i * j) % 2 ? '#ffd76a' : '#2a3566');
        }
      }
      return s;
    },
    flower: function () {
      var s = G('a', '#8fd18c', '#4fa86a') + BG('url(#a)') + R(97, 150, 6, 120, '#2f8a4a') +
        '<ellipse cx="128" cy="205" rx="26" ry="10" fill="#3aa05a" transform="rotate(-25 128 205)"/>', i, a;
      for (i = 0; i < 8; i++) {
        a = i * Math.PI / 4;
        s += '<circle cx="' + (100 + Math.cos(a) * 30).toFixed(1) + '" cy="' + (125 + Math.sin(a) * 30).toFixed(1) + '" r="22" fill="#ff8fb3"/>';
      }
      return s + '<circle cx="100" cy="125" r="16" fill="#ffd23f"/>';
    },
    food: function () {
      return BG('#c68b59') + '<path d="M-40 60h280M-40 120h280M-40 190h280M-40 250h280" stroke="#b27a4a" stroke-width="3"/>' +
        '<circle cx="100" cy="135" r="82" fill="#fff"/><circle cx="100" cy="135" r="64" fill="#f1ede4"/>' +
        '<ellipse cx="100" cy="150" rx="42" ry="14" fill="#d9a05b"/><ellipse cx="100" cy="138" rx="42" ry="14" fill="#e9b872"/>' +
        '<ellipse cx="100" cy="126" rx="42" ry="14" fill="#f0c88b"/>' +
        '<circle cx="88" cy="116" r="9" fill="#e53b4c"/><circle cx="112" cy="118" r="8" fill="#e53b4c"/><circle cx="100" cy="108" r="7" fill="#fff"/>';
    },
    cat: function (d) {
      return BG('#f7c59f') + '<g transform="translate(' + d + ' 0)">' +
        '<polygon points="52,105 58,48 94,84" fill="#e8923a"/><polygon points="148,105 142,48 106,84" fill="#e8923a"/>' +
        '<polygon points="62,92 64,66 82,84" fill="#f5b3b3"/><polygon points="138,92 136,66 118,84" fill="#f5b3b3"/>' +
        '<circle cx="100" cy="140" r="62" fill="#e8923a"/>' +
        '<path d="M100 82v22M84 86l4 16M116 86l-4 16" stroke="#b9661f" stroke-width="4" stroke-linecap="round"/>' +
        '<ellipse cx="78" cy="132" rx="11" ry="13" fill="#fff"/><ellipse cx="122" cy="132" rx="11" ry="13" fill="#fff"/>' +
        '<ellipse cx="78" cy="134" rx="7" ry="11" fill="#2b7a3d"/><ellipse cx="122" cy="134" rx="7" ry="11" fill="#2b7a3d"/>' +
        '<ellipse cx="78" cy="134" rx="2.5" ry="9" fill="#111"/><ellipse cx="122" cy="134" rx="2.5" ry="9" fill="#111"/>' +
        '<polygon points="93,154 107,154 100,163" fill="#f08a9b"/>' +
        '<path d="M100 163v6q-8 8-16 2M100 169q8 8 16 2" stroke="#6b3a12" stroke-width="2" fill="none"/>' +
        '<path d="M60 160l-30-6M60 168l-30 4M140 160l30-6M140 168l30 4" stroke="#fff" stroke-width="1.5"/></g>';
    },
    shotA: function () {
      var s = BG('#eef1f8') + R(0, 0, 200, 22, '#fff') + '<text x="14" y="15" font-size="9" fill="#222"' + T + '>9:41</text>' +
        G('a', '#4aa3ff', '#2a5bd7') + '<rect x="14" y="36" width="172" height="110" rx="16" fill="url(#a)"/>' +
        '<text x="30" y="96" font-size="38" fill="#fff" font-weight="700"' + T + '>24°</text>' +
        '<text x="30" y="120" font-size="11" fill="#dbe9ff"' + T + '>Partly cloudy</text><circle cx="148" cy="80" r="16" fill="#ffd45a"/>', i;
      for (i = 0; i < 3; i++) {
        s += R(14, 160 + i * 30, 172, 22, '#fff', ' rx="8"') + R(24, 168 + i * 30, 70, 6, '#c9cfdd', ' rx="3"') + R(150, 168 + i * 30, 26, 6, '#9aa3bb', ' rx="3"');
      }
      return s;
    },
    shotB: function () {
      var s = BG('#f2f2f7') + R(0, 0, 200, 22, '#fff') + '<text x="14" y="15" font-size="9" fill="#222"' + T + '>9:42</text>' +
        '<text x="14" y="50" font-size="17" fill="#111" font-weight="700"' + T + '>Settings</text>' + R(14, 62, 172, 150, '#fff', ' rx="12"'),
        c = ['#ff9f0a', '#30b0ff', '#34c759', '#af52de', '#ff453a'], i;
      for (i = 0; i < 5; i++) {
        s += '<circle cx="32" cy="' + (82 + i * 28) + '" r="8" fill="' + c[i] + '"/>' + R(48, 79 + i * 28, 80 + (i % 3) * 14, 6, '#b8bdcc', ' rx="3"');
      }
      return s;
    }
  };

  function img(name, o) {
    o = o || {};
    var body = S[name](o.dx || 0);
    var f = o.blur ? '<defs><filter id="bl" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="7"/></filter></defs>' : '';
    var g = o.blur ? '<g filter="url(#bl)">' + body + '</g>' : body;
    var ov = o.dark ? R(-40, -40, 280, 340, '#05060f', ' opacity=".66"') : o.over ? R(-40, -40, 280, 340, '#fff', ' opacity=".58"') : '';
    var s = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 260" preserveAspectRatio="xMidYMid slice">' + f + g + ov + '</svg>';
    return 'url("data:image/svg+xml,' + encodeURIComponent(s) + '")';
  }
  function put(el, name, o) {
    if (!el) return;
    el.style.backgroundImage = img(name, o);
    el.style.backgroundSize = 'cover';
    el.style.backgroundPosition = 'center';
  }

  var B = { blur: 1 }, D = { dark: 1 }, O = { over: 1 };
  var groups = [
    /* hero: silinmesi önerilenler */ [['sea', B], ['city', D], ['mountain', O], ['shotA'], ['shotB']],
    /* hero: kopyalar */ [['sunset'], ['sunset', { dx: 8 }], ['sunset', { dx: -8 }], ['cat'], ['cat', { dx: 6 }]],
    /* canlı sonuçlar: öneriler */ [['city', D], ['sea', B], ['shotB'], ['mountain', O], ['shotA']],
    /* canlı sonuçlar: kopyalar */ [['cat'], ['cat', { dx: 6 }], ['sunset'], ['sunset', { dx: 8 }], ['sunset', { dx: -8 }]],
    /* videolar: benzer videolar */ [['food'], ['cat'], ['mountain'], ['city'], ['sea']]
  ];
  var grid = [
    ['shotA'], ['city', D], ['cat'], ['mountain', O], ['shotB'], ['sea', B],
    ['sunset'], ['flower', B], ['food', D], ['city', O], ['sea', D], ['flower']
  ];

  function run() {
    var th = document.querySelectorAll('.thumbs');
    groups.forEach(function (g, gi) {
      var cells = th[gi] ? th[gi].querySelectorAll('i') : [];
      g.forEach(function (it, i) { put(cells[i], it[0], it[1]); });
    });
    var cells = document.querySelectorAll('.grid9 i');
    grid.forEach(function (it, i) { put(cells[i], it[0], it[1]); });

    var sc = document.querySelector('.swipe-card');
    if (sc) {
      put(sc, 'sunset');
      sc.classList.add('has-photo');
    }
    var st = document.createElement('style');
    st.textContent = '.swipe-card.has-photo::after{display:none}.keep-tag{z-index:2}';
    document.head.appendChild(st);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', run);
  else run();
})();
