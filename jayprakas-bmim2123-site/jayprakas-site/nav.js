// Mobile nav toggle
document.getElementById('navToggle').addEventListener('click', function () {
  document.getElementById('navLinks').classList.toggle('open');
});

// Mobile dropdown toggle
document.querySelectorAll('.dropdown .dropbtn').forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    if (window.innerWidth <= 768) {
      e.preventDefault();
      this.closest('.dropdown').classList.toggle('open');
    }
  });
});

// Close nav when a link is clicked (mobile)
document.querySelectorAll('.nav-links a').forEach(function (link) {
  link.addEventListener('click', function () {
    if (window.innerWidth <= 768) {
      document.getElementById('navLinks').classList.remove('open');
    }
  });
});
