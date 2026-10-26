/* Smart Gallery - mockup örnek fotoğrafları (gerçek fotoğraflar, CC0 / public domain)
   Kullanım: /assets/sg-photos.js ve /assets/photos/ klasörünü yükle, index.html'de </body> öncesine ekle:
   <script src="/assets/sg-photos.js"></script>
   Dosya bulunamazsa kutular eski gradient haline düşer. */
(function () {
  var DIR = '/assets/photos/';
  function R(x, y, w, h, f, e) {
    return '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="' + f + '"' + (e || '') + '/>';
  }
  var T = ' font-family="sans-serif"';
  function grad(a, b) {
    return '<defs><linearGradient id="a" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + a + '"/><stop offset="1" stop-color="' + b + '"/></linearGradient></defs>';
  }
  /* ekran görüntüleri: gerçek fotoğraf yerine arayüz çizimi */
  var SHOT = {
    shotA: function () {
      var s = R(0, 0, 200, 260, '#eef1f8') + R(0, 0, 200, 22, '#fff') + '<text x="14" y="15" font-size="9" fill="#222"' + T + '>9:41</text>' +
        grad('#4aa3ff', '#2a5bd7') + '<rect x="14" y="36" width="172" height="110" rx="16" fill="url(#a)"/>' +
        '<text x="30" y="96" font-size="38" fill="#fff" font-weight="700"' + T + '>24°</text>' +
        '<text x="30" y="120" font-size="11" fill="#dbe9ff"' + T + '>Partly cloudy</text><circle cx="148" cy="80" r="16" fill="#ffd45a"/>', i;
      for (i = 0; i < 3; i++) {
        s += R(14, 160 + i * 30, 172, 22, '#fff', ' rx="8"') + R(24, 168 + i * 30, 70, 6, '#c9cfdd', ' rx="3"') + R(150, 168 + i * 30, 26, 6, '#9aa3bb', ' rx="3"');
      }
      return s;
    },
    shotB: function () {
      var s = R(0, 0, 200, 260, '#f2f2f7') + R(0, 0, 200, 22, '#fff') + '<text x="14" y="15" font-size="9" fill="#222"' + T + '>9:42</text>' +
        '<text x="14" y="50" font-size="17" fill="#111" font-weight="700"' + T + '>Settings</text>' + R(14, 62, 172, 150, '#fff', ' rx="12"'),
        c = ['#ff9f0a', '#30b0ff', '#34c759', '#af52de', '#ff453a'], i;
      for (i = 0; i < 5; i++) {
        s += '<circle cx="32" cy="' + (82 + i * 28) + '" r="8" fill="' + c[i] + '"/>' + R(48, 79 + i * 28, 80 + (i % 3) * 14, 6, '#b8bdcc', ' rx="3"');
      }
      return s;
    }
  };
  function src(name) {
    if (SHOT[name]) {
      var s = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 260" preserveAspectRatio="xMidYMid slice">' + SHOT[name]() + '</svg>';
      return 'url("data:image/svg+xml,' + encodeURIComponent(s) + '")';
    }
    return 'url("' + DIR + name + '.jpg")';
  }
  function put(el, name) {
    if (!el) return;
    var fb = getComputedStyle(el).backgroundImage; /* dosya yoksa eski gradient görünsün */
    el.style.backgroundImage = src(name) + (fb && fb !== 'none' ? ',' + fb : '');
    el.style.backgroundSize = 'cover';
    el.style.backgroundPosition = 'center';
  }

  var groups = [
    /* hero · silinmesi önerilenler */ ['cat-blur', 'rocket-dark', 'coffee-over', 'shotA', 'shotB'],
    /* hero · birebir kopyalar */ ['cat', 'cat-b', 'rocket', 'rocket-b', 'rocket-c'],
    /* canlı sonuçlar · öneriler */ ['rocket-dark', 'cat-blur', 'shotB', 'moon-over', 'shotA'],
    /* canlı sonuçlar · kopyalar */ ['rocket', 'rocket-b', 'rocket-c', 'cat', 'cat-b'],
    /* videolar · benzer videolar */ ['coffee', 'cat', 'rocket', 'moon', 'cat-dark']
  ];
  var grid = ['shotA', 'rocket-dark', 'cat', 'moon-over', 'shotB', 'cat-blur',
              'coffee', 'coffee-blur', 'coffee-dark', 'rocket-over', 'rocket-blur', 'moon'];

  function run() {
    var th = document.querySelectorAll('.thumbs');
    groups.forEach(function (g, gi) {
      var cells = th[gi] ? th[gi].querySelectorAll('i') : [];
      g.forEach(function (n, i) { put(cells[i], n); });
    });
    var cells = document.querySelectorAll('.grid9 i');
    grid.forEach(function (n, i) { put(cells[i], n); });

    var sc = document.querySelector('.swipe-card');
    if (sc) { put(sc, 'coffee'); sc.classList.add('has-photo'); }
    var st = document.createElement('style');
    st.textContent = '.swipe-card.has-photo::after{display:none}.keep-tag{z-index:2}';
    document.head.appendChild(st);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', run);
  else run();
})();
