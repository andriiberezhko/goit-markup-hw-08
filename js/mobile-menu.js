// (() => {
//     const menuBtnRef = document.querySelector('[data-menu-button]');
//     const mobileMenuRef = document.querySelector("[data-menu]");
//     menuBtnRef.addEventListener('Click', () => {
//         const expanded = menuBtnRef.getAttribute('aria-expanded') === "true" || false;
        
//         menuBtnRef.classList.toggle('is-open');
//         menuBtnRef.setAttribute('aria-expanded', !expanded);

//         mobileMenuRef.classList.toggle('is-open');
//     });
// })();

(() => {
    const refs = {
      openMenuBtn: document.querySelector('[data-menu-open]'),
      closeMenuBtn: document.querySelector('[data-menu-close]'),
      menu: document.querySelector('[data-menu]'),
      // menu: document.querySelector('[no-scroll]'),
    };
  
    refs.openMenuBtn.addEventListener('click', toggleMenu);
    refs.closeMenuBtn.addEventListener('click', toggleMenu);
  
  function toggleMenu() {
      document.body.classList.toggle('menu-open')
      refs.menu.classList.toggle('is-hidden');
    }
  })();



