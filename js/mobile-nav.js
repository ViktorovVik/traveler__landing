
   const navBtn = document.querySelector('[data-js-header-burger-button]');
   const overlay = document.querySelector('[data-js-overlay]');
   const nav = document.querySelector('#mobileNav');

   navBtn.onclick = toggleMobileNav;
   overlay.onclick = toggleMobileNav;

   function toggleMobileNav() {
      navBtn.classList.toggle('active');
      overlay.classList.toggle('active');
      nav.classList.toggle('open');
      document.body.classList.toggle('is-lock')
   }




