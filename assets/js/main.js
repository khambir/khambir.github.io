(function () {
  var root = document.documentElement;
  var btn = document.getElementById('themeBtn');
  if (!btn) return;

  function sync() {
    btn.textContent = root.getAttribute('data-theme') === 'light' ? '🌙' : '☀️';
  }

  btn.addEventListener('click', function () {
    var next = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    root.setAttribute('data-theme', next);
    try { localStorage.setItem('theme', next); } catch (e) {}
    sync();
  });

  sync();
})();
