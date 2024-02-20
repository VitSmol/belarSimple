const menuBtn = document.querySelector('.menu');
const closeBtn = document.querySelector('.close');
const openClose = (open, close, menu, addClose) => {
  open.style.display = 'none';
  close.style.display = 'inline-block';
  addClose === "add" ? menu.classList.add('active'): menu.classList.remove('active'); //
}

menuBtn.addEventListener('click', () => {
  const listMenu = document.querySelector('#listMenu');
  openClose(menuBtn, closeBtn, listMenu, 'add');
  closeBtn.addEventListener('click', () => {
    openClose(closeBtn, menuBtn,listMenu, 'remove');
  })
})