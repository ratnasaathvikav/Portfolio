// Mobile menu toggle
const navMenu = document.getElementById('nav');
const menuBtn = document.getElementById('menuBtn');
if (menuBtn && navMenu) {
  menuBtn.addEventListener('click', () => {
    navMenu.style.display = (navMenu.style.display === 'flex') ? 'none' : 'flex';
  });
}

// Open resume in new tab
const cvBtn = document.getElementById('cvBtn');
if (cvBtn) {
  cvBtn.addEventListener('click', () => {
    window.open('Resume.pdf', '_blank');
  });
}

