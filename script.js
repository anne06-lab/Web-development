document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.site-header');
  const updateHeader = () => header?.classList.toggle('is-scrolled', window.scrollY > 12);
  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive: true });

  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.main-nav');

  if (menuToggle && nav) {
    menuToggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', String(isOpen));
      menuToggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
    });
  }

  const form = document.querySelector('#enquiryForm');
  document.querySelectorAll('.reveal').forEach((element) => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); }
    }, { threshold: .14 });
    observer.observe(element);
  });

  document.querySelectorAll('[data-counter]').forEach((counter) => {
    const target = Number(counter.dataset.counter);
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      const start = performance.now();
      const duration = 1300;
      const update = (time) => {
        const progress = Math.min((time - start) / duration, 1);
        counter.textContent = Math.round(target * (1 - Math.pow(1 - progress, 3))).toLocaleString();
        if (progress < 1) requestAnimationFrame(update);
      };
      requestAnimationFrame(update); observer.unobserve(counter);
    }, { threshold: .65 });
    observer.observe(counter);
  });

  if (!form) return;

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    let valid = true;
    const message = document.querySelector('#formMessage');

    ['name', 'email', 'interest', 'message'].forEach((name) => {
      const field = document.querySelector(`#${name}`);
      const error = document.querySelector(`[data-error-for="${name}"]`);
      const empty = !field.value.trim();
      const invalidEmail = name === 'email' && !empty && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value);
      field.classList.toggle('is-invalid', empty || invalidEmail);
      error.textContent = empty ? 'This field is required.' : invalidEmail ? 'Enter a valid email address.' : '';
      valid &&= !(empty || invalidEmail);
    });

    if (valid) {
      message.textContent = 'Thank you — your enquiry has been recorded for this demonstration.';
      form.reset();
    } else {
      message.textContent = 'Please correct the highlighted fields.';
    }
  });

  form.addEventListener('input', (event) => {
    const field = event.target;
    if (!field.matches('input, select, textarea') || !field.value.trim()) return;
    field.classList.remove('is-invalid');
    document.querySelector(`[data-error-for="${field.id}"]`).textContent = '';
  });
});
