(() => {
  const refs = {
    openMenuBtn: document.querySelector("[data-Menu-open]"),
    closeMenuBtn: document.querySelector("[data-Menu-close]"),
    menu: document.querySelector("[data-Menu]"),
  };

  refs.openMenuBtn.addEventListener("click", toggleMenu);
  refs.closeMenuBtn.addEventListener("click", toggleMenu);

  function toggleModal() {
    refs.Menu.classList.toggle("is__hidden");
  }
})();