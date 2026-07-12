(function() {
  var btn = document.getElementById('back-to-top');
  var toc = document.querySelector('nav');
  if (!btn || !toc) return;

  function update() {
    var y = window.scrollY || document.documentElement.scrollTop;
    var show = y > 400;
    btn.style.opacity = show ? '1' : '0';
    btn.style.pointerEvents = show ? 'auto' : 'none';
  }

  update();
  window.addEventListener('scroll', update, { passive: true });

  btn.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  var links = toc.querySelectorAll('a[href^="#"]');
  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function(e) {
      e.preventDefault();
      var target = document.querySelector(this.getAttribute('href'));
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
  }
})();
