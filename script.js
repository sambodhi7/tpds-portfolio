document.querySelector('#year').textContent = new Date().getFullYear();

for (const link of document.querySelectorAll('.navbar-nav .nav-link')) {
  link.addEventListener('click', () => {
    const menu = document.querySelector('#navigation');
    if (menu.classList.contains('show')) bootstrap.Collapse.getOrCreateInstance(menu).hide();
  });
}

for (const button of document.querySelectorAll('.project-filter')) {
  button.addEventListener('click', () => {
    for (const filter of document.querySelectorAll('.project-filter')) {
      const active = filter === button;
      filter.classList.toggle('active', active);
      filter.setAttribute('aria-pressed', String(active));
    }
    for (const project of document.querySelectorAll('[data-project]')) {
      project.hidden = button.dataset.filter !== 'all' && project.dataset.project !== button.dataset.filter;
    }
  });
}
