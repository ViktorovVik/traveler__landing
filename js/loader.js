
   const loader = document.querySelector('[data-js-loader]');

   window.addEventListener('load', () => {
      setTimeout(() => {
         loader.classList.add('hidden');
      }, 500) 
   });


