document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.site-header');
  const updateHeader = () => header?.classList.toggle('is-scrolled', window.scrollY > 12);
  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive: true });

  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.main-nav');
  menuToggle?.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
  });

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
      const update = (time) => {
        const progress = Math.min((time - start) / 1300, 1);
        counter.textContent = Math.round(target * (1 - Math.pow(1 - progress, 3))).toLocaleString();
        if (progress < 1) requestAnimationFrame(update);
      };
      requestAnimationFrame(update); observer.unobserve(counter);
    }, { threshold: .65 });
    observer.observe(counter);
  });

  const projects = [
    { title: 'Green Streets', category: 'Community', description: 'Tree planting, garden maintenance and neighbourhood greening activities.', status: 'Monthly sessions' },
    { title: 'Clean & Care', category: 'Clean-up', description: 'Community clean-ups that restore shared spaces and encourage responsible disposal.', status: 'Open to volunteers' },
    { title: 'Green Schools', category: 'Education', description: 'Interactive school sessions about recycling, water conservation and biodiversity.', status: 'School bookings open' },
    { title: 'Future Guardians', category: 'Youth', description: 'Youth volunteer opportunities in environmental campaigns and local projects.', status: 'Next intake: June' }
  ];
  const projectResults = document.querySelector('#projectResults');
  if (projectResults) {
    const search = document.querySelector('#projectSearch');
    const category = document.querySelector('#projectCategory');
    const summary = document.querySelector('#resultsSummary');
    const renderProjects = () => {
      const term = search.value.toLowerCase().trim();
      const selected = category.value;
      const matches = projects.filter((project) => (selected === 'All' || project.category === selected) && `${project.title} ${project.category} ${project.description}`.toLowerCase().includes(term));
      summary.textContent = `${matches.length} ${matches.length === 1 ? 'project' : 'projects'} found`;
      projectResults.innerHTML = matches.map((project, index) => `<article class="card reveal is-visible"><div class="number">0${index + 1}</div><h3>${project.title}</h3><p>${project.description}</p><span class="tag">${project.category} · ${project.status}</span></article>`).join('') || '<p>No projects match your search. Try another word or category.</p>';
    };
    search.addEventListener('input', renderProjects);
    category.addEventListener('change', renderProjects);
    renderProjects();
  }

  const lightbox = document.querySelector('#galleryLightbox');
  document.querySelectorAll('[data-lightbox]').forEach((button) => {
    button.addEventListener('click', () => {
      lightbox.querySelector('img').src = button.dataset.full;
      lightbox.querySelector('img').alt = button.dataset.alt;
      lightbox.querySelector('.lightbox__caption').textContent = button.dataset.caption;
      lightbox.showModal();
    });
  });
  lightbox?.querySelector('.lightbox__close').addEventListener('click', () => lightbox.close());

  document.querySelectorAll('.form-card').forEach((form) => {
    const message = form.querySelector('.form-message');
    const fields = [...form.querySelectorAll('[required]')];
    const validate = (field) => {
      const error = form.querySelector(`[data-error-for="${field.id}"]`);
      let text = '';
      if (!field.value.trim()) text = 'This field is required.';
      else if (field.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value)) text = 'Enter a valid email address.';
      else if (field.type === 'tel' && !/^\+?[0-9\s()-]{10,}$/.test(field.value)) text = 'Enter a valid phone number.';
      else if (field.minLength > 0 && field.value.trim().length < field.minLength) text = `Enter at least ${field.minLength} characters.`;
      field.classList.toggle('is-invalid', Boolean(text));
      if (error) error.textContent = text;
      return !text;
    };
    fields.forEach((field) => field.addEventListener('input', () => validate(field)));
    form.addEventListener('submit', async (event) => {
      event.preventDefault();
      const valid = fields.every(validate);
      message.className = 'form-message';
      if (!valid) { message.textContent = 'Please correct the highlighted fields.'; message.classList.add('is-error'); return; }
      const submit = form.querySelector('[type="submit"]');
      submit.disabled = true;
      message.textContent = 'Processing your information…';
      await new Promise((resolve) => setTimeout(resolve, 450));
      const data = Object.fromEntries(new FormData(form));
      if (form.id === 'contactForm') {
        const subject = encodeURIComponent(`${data.messageType}: message from ${data.name}`);
        const body = encodeURIComponent(`Name: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone}\nMessage type: ${data.messageType}\n\n${data.message}`);
        message.textContent = 'Your email is ready to send using your default email application.';
        message.classList.add('is-success');
        window.location.href = `mailto:hello@greenhope.org.za?subject=${subject}&body=${body}`;
      } else {
        const response = { Volunteering: 'Volunteer orientation places are currently available.', 'School programme': 'School programme bookings are open for the next term.', 'Corporate partnership': 'Our partnership team will share the current collaboration options.', 'Community project': 'We will check which local projects have space for your idea.', Sponsorship: 'Current sponsorship opportunities are available on request.' };
        message.textContent = `Thank you, ${data.name}. ${response[data.interest] || 'Our team will respond soon.'}`;
        message.classList.add('is-success');
        form.reset();
      }
      submit.disabled = false;
    });
  });
});
