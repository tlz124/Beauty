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
