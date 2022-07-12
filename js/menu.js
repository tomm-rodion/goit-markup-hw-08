(() => {
    const refs = {
      openMenuBtn: document.querySelector(".nav-btn"),
      closeMenuBtn: document.querySelector(".nav-btn-close"),
      menu: document.querySelector(".mob-menu"),
      body: document.querySelector("body"),
    };
  
    refs.openMenuBtn.addEventListener("click", toggleMenu);
    refs.closeMenuBtn.addEventListener("click", toggleMenu);
  
    function toggleMenu() {
      refs.menu.classList.toggle("is-hidden");
      refs.body.classList.toggle("no-scroll")
    }
  })();