// Mobile nav toggle
const toggle = document.getElementById('navToggle');
const links = document.getElementById('navLinks');

if (toggle && links) {
  toggle.addEventListener('click', () => {
    links.classList.toggle('open');
  });
}

// Mobile dropdown toggle (tap)
document.querySelectorAll('.dropdown').forEach(dd => {
  const btn = dd.querySelector('.dropbtn');
  if (btn) {
    btn.addEventListener('click', e => {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        dd.classList.toggle('open');
      }
    });
  }
});
