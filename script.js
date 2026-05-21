// ── Social links ─────────────────────────────────────────────────

// Each function opens the corresponding profile in a new browser tab
function gitHub()   { window.open('https://github.com/Kenechi-Dev'); }
function linkedIn() { window.open('https://www.linkedin.com/in/kenechi-okonkwo-36b05a195?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BpWAoOiYoRWazd5l%2BGTQJ5g%3D%3D'); }
function beHance()  { window.open('https://www.behance.net/keneokonkwo'); }


// ── Mobile menu ───────────────────────────────────────────────────

function toggleMenu() {
  // Add or remove the "open" class on the nav links list to show/hide it
  document.querySelector('.menu-links').classList.toggle('open');
  // Add or remove the "open" class on the icon to animate it into an X
  document.querySelector('.hambuger-icon').classList.toggle('open');
}


// ── Project bottom sheet ──────────────────────────────────────────

// The sliding panel that appears when a project card is clicked
const sheet   = document.getElementById('sheet-frame');
// The dark background that appears behind the sheet
const overlay = document.querySelector('.overlay');

// Each project maps its card element ID to its content panel class
const projects = [
  { cardId: 'pluritongues', contentClass: '.pluritongues-content' },
  { cardId: 'evently',      contentClass: '.evently-content'      },
  { cardId: 'tripmatch',    contentClass: '.tripmatch-content'    },
  { cardId: 'vanta',        contentClass: '.vanta-content'        },
  { cardId: 'Uishowcase',   contentClass: '.uishowcase-content'   },
];

// Build an array of the actual content panel DOM elements from the list above
const contentPanels = projects.map(p => document.querySelector(p.contentClass));

function openSheet(activePanel) {
  // Slide the sheet up into view
  sheet.classList.add('active');
  // Show the dark overlay behind the sheet
  overlay.classList.add('active');
  // Prevent the page from scrolling while the sheet is open
  document.body.classList.add('noscroll');
  // Always start the sheet scrolled to the top when it opens
  sheet.scrollTo({ top: 0, behavior: 'smooth' });
  // Show only the content panel for the clicked project, hide all others
  contentPanels.forEach(panel => {
    panel.style.display = panel === activePanel ? 'flex' : 'none';
  });
}

function closeSheet() {
  // Slide the sheet back down out of view
  sheet.classList.remove('active');
  // Hide the dark overlay
  overlay.classList.remove('active');
  // Re-enable page scrolling
  document.body.classList.remove('noscroll');
}

// Loop through each project and attach a click handler to its card
projects.forEach(({ cardId }, i) => {
  // When the card is clicked, open the sheet and show its matching content panel
  document.getElementById(cardId).onclick = () => openSheet(contentPanels[i]);
});

// Close the sheet when the X button is clicked
document.getElementById('close-btn').onclick = closeSheet;
// Also close the sheet when the user clicks the overlay outside the sheet
overlay.onclick = closeSheet;


// ── Scroll reveal ─────────────────────────────────────────────────

// IntersectionObserver watches elements and fires when they enter the viewport
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    // Skip elements that aren't visible on screen yet
    if (!entry.isIntersecting) return;

    const el = entry.target;

    // Adding "visible" triggers the CSS animation defined in body.css
    el.classList.add('visible');

    // Project cards have a hover effect (scale) — once the reveal animation
    // finishes, clean up the animation classes so hover works without conflict
    if (el.classList.contains('project')) {
      el.addEventListener('animationend', () => {
        el.style.opacity = '';       // Remove inline opacity set during reveal
        el.style.animation = '';     // Remove the animation so hover isn't affected
        el.style.animationDelay = ''; // Remove the stagger delay
        el.classList.remove('reveal', 'from-bottom', 'visible'); // Clean up classes
      }, { once: true }); // { once: true } means this listener fires only one time
    }

    // Stop watching this element — it only needs to animate in once
    revealObserver.unobserve(el);
  });
}, { threshold: 0.15 }); // Fire when at least 15% of the element is in view

function setupReveal(selector, direction, stagger = false) {
  document.querySelectorAll(selector).forEach((el, i) => {
    // Mark the element as hidden and set which direction it will animate from
    el.classList.add('reveal', direction);
    // If stagger is on, each element delays slightly more than the one before it
    if (stagger) el.style.animationDelay = (i * 0.12) + 's';
    // Start watching this element for when it enters the viewport
    revealObserver.observe(el);
  });
}

// Register each group of elements with their animation direction
setupReveal('.about-tittle',  'from-bottom');         // Section headings slide up
setupReveal('.about-img',     'from-left');            // About photo slides in from left
setupReveal('.about-content', 'from-right');           // About text slides in from right
setupReveal('.product-exp',   'from-left');            // Product skills slide in from left
setupReveal('.frontend-exp',  'from-right');           // Frontend skills slide in from right
setupReveal('.project',       'from-bottom', true);   // Project cards stagger up one by one
setupReveal('.email-frame',   'from-bottom');          // Contact email slides up
