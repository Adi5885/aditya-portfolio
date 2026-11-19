const menuBtn = document.getElementById('menuBtn');
  const navlinks = document.getElementById('navlinks');
  menuBtn.addEventListener('click', () => navlinks.classList.toggle('open'));
  navlinks.querySelectorAll('a').forEach(link => link.addEventListener('click', () => navlinks.classList.remove('open')));
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {threshold: 0.12});
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
