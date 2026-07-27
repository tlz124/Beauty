// NAV SCROLL
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => navbar.classList.toggle('scrolled', scrollY > 50), {passive:true});

// HAMBURGER
const ham = document.querySelector('.hamburger');
const mob = document.querySelector('.mobile-menu');
ham.addEventListener('click', () => { ham.classList.toggle('open'); mob.classList.toggle('open'); });
mob.querySelectorAll('a').forEach(a => a.addEventListener('click', () => { ham.classList.remove('open'); mob.classList.remove('open'); }));

// SMOOTH SCROLL
document.querySelectorAll('a[href^="#"]').forEach(a => a.addEventListener('click', e => {
  const t = document.querySelector(a.getAttribute('href'));
  if (!t) return; e.preventDefault();
  window.scrollTo({top: t.offsetTop - navbar.offsetHeight, behavior:'smooth'});
}));

// SCROLL REVEAL
document.querySelectorAll('.reveal').forEach(el =>
  new IntersectionObserver((en,ob)=>{ if(en[0].isIntersecting){en[0].target.classList.add('visible');ob.disconnect();}},{threshold:.1}).observe(el));

// TODAY'S HOURS
const days=['sunday','monday','tuesday','wednesday','thursday','friday','saturday'];
const row = document.querySelector(`tr[data-day="${days[new Date().getDay()]}"]`);
if(row) row.classList.add('today');

// PRODUCT FILTER
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const cat = btn.dataset.filter;
    document.querySelectorAll('.product-card').forEach(card => {
      card.classList.toggle('hidden', cat !== 'all' && card.dataset.cat !== cat);
    });
  });
});

// CONTACT FORM
const form = document.getElementById('contact-form');
const succ = document.getElementById('form-success');
form.addEventListener('submit', e => {
  e.preventDefault();
  const btn = form.querySelector('.btn-submit');
  btn.textContent = 'Sending…'; btn.disabled = true;
  setTimeout(() => { form.style.display='none'; succ.style.display='block'; }, 1000);
});
