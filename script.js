function gitHub() {
  window.open('https://github.com/Kenechi-Dev')
}

function linkedIn() {
  window.open('https://www.linkedin.com/in/kenechi-okonkwo-36b05a195?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BpWAoOiYoRWazd5l%2BGTQJ5g%3D%3D')
}

function beHance() {
  window.open('https://www.behance.net/keneokonkwo')
}



const sheet = document.getElementById('sheet-frame');
const pluriTongues = document.getElementById('pluritongues');
const pluritonguesContent = document.querySelector('.pluritongues-content')
const evently = document.getElementById('evently')
const eventlyContent = document.querySelector('.evently-content')
const tripMatch = document.getElementById('tripmatch')
const tripmatchContent = document.querySelector('.tripmatch-content')
const Vanta = document.getElementById('vanta')
const vantaContent = document.querySelector('.vanta-content')
const Uishowcase = document.getElementById('Uishowcase')
const uishowcaseContent = document.querySelector('.uishowcase-content')
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
    uishowcaseContent.style.display = 'none'
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
    uishowcaseContent.style.display = 'none'
  }

  tripMatch.onclick = () => {
    sheet.classList.add('active');
    document.body.classList.add('noscroll');
    overlay.classList.add('active');
    sheet.scrollTo({ top: 0, behavior: 'smooth' });
    tripmatchContent.style.display = 'flex';
    pluritonguesContent.style.display = 'none'
    eventlyContent.style.display = 'none'
    vantaContent.style.display = 'none'
    uishowcaseContent.style.display = 'none'
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
    uishowcaseContent.style.display = 'none'
  };

    Uishowcase.onclick = () => {
    sheet.classList.add('active');
    document.body.classList.add('noscroll');
    overlay.classList.add('active');
    sheet.scrollTo({ top: 0, behavior: 'smooth' });
    vantaContent.style.display = 'none';
    pluritonguesContent.style.display = 'none'
    tripmatchContent.style.display = 'none'
    eventlyContent.style.display = 'none'
    uishowcaseContent.style.display = 'flex'
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