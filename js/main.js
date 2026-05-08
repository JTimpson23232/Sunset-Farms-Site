// =========================================================
// SUNSET FARMS / JS
// =========================================================

(function(){
  'use strict';

  // -------- Mark JS available (gates lazy-load fade) --------
  document.documentElement.classList.add('js');

  // -------- Sticky nav scroll state --------
  const nav = document.querySelector('.nav');
  if(nav){
    const onScroll = () => {
      if(window.scrollY > 16) nav.classList.add('scrolled');
      else nav.classList.remove('scrolled');
    };
    window.addEventListener('scroll', onScroll, {passive:true});
    onScroll();
  }

  // -------- Mobile menu --------
  const toggle = document.querySelector('.nav__toggle');
  if(toggle && nav){
    toggle.addEventListener('click', () => {
      nav.classList.toggle('open');
      const expanded = nav.classList.contains('open');
      toggle.setAttribute('aria-expanded', expanded);
    });
    document.querySelectorAll('.nav__links a').forEach(a => {
      a.addEventListener('click', () => nav.classList.remove('open'));
    });
  }

  // -------- Reveal on scroll (IntersectionObserver) --------
  if('IntersectionObserver' in window){
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if(e.isIntersecting){
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    }, {threshold:0.12, rootMargin:'0px 0px -40px 0px'});
    document.querySelectorAll('.reveal').forEach(el => io.observe(el));
  } else {
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('in'));
  }

  // -------- Year stamp --------
  const yr = document.getElementById('year');
  if(yr) yr.textContent = new Date().getFullYear();

  // -------- Lazy-load fade-in --------
  document.querySelectorAll('img[loading="lazy"]').forEach(img => {
    if(img.complete && img.naturalHeight !== 0){
      img.dataset.loaded = 'true';
    } else {
      img.addEventListener('load', () => { img.dataset.loaded = 'true'; }, {once:true});
      img.addEventListener('error', () => { img.dataset.loaded = 'true'; }, {once:true});
    }
  });

  // -------- Newsletter / contact form (no-op, captured) --------
  document.querySelectorAll('form[data-capture]').forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = form.querySelector('button[type=submit]');
      const original = btn ? btn.textContent : '';
      if(btn){ btn.textContent = 'Thank you ✓'; btn.disabled = true; }
      form.reset();
      setTimeout(() => { if(btn){ btn.textContent = original; btn.disabled = false; } }, 3500);
    });
  });

})();
