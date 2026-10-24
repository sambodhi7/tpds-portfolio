document.querySelector('#year').textContent = new Date().getFullYear();

for (const link of document.querySelectorAll('.navbar-nav .nav-link')) {
  link.addEventListener('click', () => {
    const menu = document.querySelector('#navigation');
    if (menu.classList.contains('show')) bootstrap.Collapse.getOrCreateInstance(menu).hide();
  });
}
