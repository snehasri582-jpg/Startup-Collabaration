(() => {
  const init = () => {
    const headers = document.querySelectorAll('header.navbar');
    headers.forEach((header, idx) => {
      const nav = header.querySelector('nav');
      if (!nav) return;

      if (!nav.id) {
        nav.id = `nav-menu-${idx + 1}`;
      }

      let toggle = header.querySelector('.nav-toggle');
      if (!toggle) {
        toggle = document.createElement('button');
        toggle.type = 'button';
        toggle.className = 'nav-toggle';
        toggle.setAttribute('aria-label', 'Toggle navigation');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-controls', nav.id);
        toggle.innerHTML = '<span></span><span></span><span></span>';
        header.insertBefore(toggle, nav);
      } else {
        toggle.setAttribute('aria-controls', nav.id);
      }

      const closeMenu = () => {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      };

      toggle.addEventListener('click', () => {
        const isOpen = nav.classList.toggle('is-open');
        toggle.setAttribute('aria-expanded', String(isOpen));
      });

      nav.addEventListener('click', (event) => {
        if (event.target && event.target.tagName === 'A') {
          closeMenu();
        }
      });

      window.addEventListener('resize', () => {
        if (window.innerWidth > 900) {
          closeMenu();
        }
      });
    });
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
