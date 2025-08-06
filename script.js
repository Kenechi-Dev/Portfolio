const sheet = document.getElementById('sheet-frame');
const openBtn = document.getElementById('project');
const closeBtn = document.getElementById('close-btn');
const overlay = document.querySelector('.overlay');

 openBtn.onclick = () => {
    sheet.classList.add('active');
    document.body.classList.add('noscroll');
    overlay.classList.add('active');
  };

   closeBtn.onclick = () => {
    sheet.classList.remove('active');
    document.body.classList.remove('noscroll');
    overlay.classList.remove('active');
  };

  overlay.onclick = () => {
    sheet.classList.remove('active');
    document.body.classList.remove('noscroll');
    overlay.classList.remove('active');
  };


  function toggleMenu() {
    const menu = document.querySelector('.menu-links');
    const icon = document.querySelector('.hambuger-icon');

    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }