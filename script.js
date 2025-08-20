const sheet = document.getElementById('sheet-frame');
const pluriTongues = document.getElementById('pluritongues');
const pluritonguesContent = document.querySelector('.pluritongues-content')
const evently = document.getElementById('evently')
const eventlyContent = document.querySelector('.evently-content')
const tripMatch = document.getElementById('tripmatch')
const tripmatchContent = document.querySelector('.tripmatch-content')
const Vanta = document.getElementById('vanta')
const vantaContent = document.querySelector('.vanta-content')
const closeBtn = document.getElementById('close-btn');
const overlay = document.querySelector('.overlay');


 pluriTongues.onclick = () => {
    sheet.classList.add('active');
    document.body.classList.add('noscroll');
    overlay.classList.add('active');
    sheet.scrollTo({ top: 0, behavior: 'smooth' });
    pluritonguesContent.style.display = 'flex'
    eventlyContent.style.display = 'none'
    tripmatchContent.style.display = 'none'
    vantaContent.style.display = 'none'
  };

 evently.onclick = () => {
    sheet.classList.add('active');
    document.body.classList.add('noscroll');
    overlay.classList.add('active');
    sheet.scrollTo({ top: 0, behavior: 'smooth' });
    eventlyContent.style.display = 'flex';
    pluritonguesContent.style.display = 'none';
    tripmatchContent.style.display = 'none';
    vantaContent.style.display = 'none';
  };

  tripMatch.onclick = () => {
    sheet.classList.add('active');
    document.body.classList.add('noscroll');
    overlay.classList.add('active');
    sheet.scrollTo({ top: 0, behavior: 'smooth' });
    tripmatchContent.style.display = 'flex';
    pluritonguesContent.style.display = 'none'
    eventlyContent.style.display = 'none'
    vantaContent.style.display = 'none'
  };

  vanta.onclick = () => {
    sheet.classList.add('active');
    document.body.classList.add('noscroll');
    overlay.classList.add('active');
    sheet.scrollTo({ top: 0, behavior: 'smooth' });
    vantaContent.style.display = 'flex';
    pluritonguesContent.style.display = 'none'
    tripmatchContent.style.display = 'none'
    eventlyContent.style.display = 'none'
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