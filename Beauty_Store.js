// Scroll reveal
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.12, rootMargin: '0px 0px -30px 0px' });
  reveals.forEach(el => observer.observe(el));

  // Stagger children
  document.querySelectorAll('.cat-grid, .product-grid, .features-grid').forEach(grid => {
    Array.from(grid.children).forEach((child, i) => {
      child.style.transitionDelay = (i * 0.12) + 's';
    });
  });

  // Mobile nav toggle
  function toggleNav() {
    const links = document.querySelector('.nav-links');
    const hamburger = document.querySelector('.hamburger');
    const overlay = document.querySelector('.mobile-overlay');
    links.classList.toggle('open');
    hamburger.classList.toggle('active');
    overlay.classList.toggle('active');
  }
  // Close nav when a link is tapped
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.addEventListener('click', () => {
      const links = document.querySelector('.nav-links');
      const hamburger = document.querySelector('.hamburger');
      const overlay = document.querySelector('.mobile-overlay');
      links.classList.remove('open');
      hamburger.classList.remove('active');
      overlay.classList.remove('active');
    });
  });
