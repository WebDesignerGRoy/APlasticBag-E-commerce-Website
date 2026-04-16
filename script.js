// Promo bar close
document.addEventListener('DOMContentLoaded', () => {
  const promoClose = document.querySelector('.promo-bar .close-btn');
  if (promoClose) {
    promoClose.addEventListener('click', () => {
      document.querySelector('.promo-bar').style.display = 'none';
    });
  }

  // Mobile menu toggle
  const mobileBtn = document.getElementById('mobile-menu-btn');
  const mobileNav = document.getElementById('mobile-nav');
  const menuIcon = document.getElementById('menu-icon');
  const closeIcon = document.getElementById('close-icon');
  if (mobileBtn && mobileNav) {
    mobileBtn.addEventListener('click', () => {
      const isOpen = mobileNav.classList.toggle('open');
      menuIcon.style.display = isOpen ? 'none' : 'block';
      closeIcon.style.display = isOpen ? 'block' : 'none';
    });
    mobileNav.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        mobileNav.classList.remove('open');
        menuIcon.style.display = 'block';
        closeIcon.style.display = 'none';
      });
    });
  }

  // FAQ accordion
  const faqButtons = document.querySelectorAll('.faq-question');
  // Open first by default
  if (faqButtons.length > 0) {
    faqButtons[0].classList.add('active');
    faqButtons[0].nextElementSibling.classList.add('open');
  }
  faqButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const answer = btn.nextElementSibling;
      const isActive = btn.classList.contains('active');
      // Close all
      faqButtons.forEach(b => { b.classList.remove('active'); b.nextElementSibling.classList.remove('open'); });
      // Toggle current
      if (!isActive) { btn.classList.add('active'); answer.classList.add('open'); }
    });
  });
});
