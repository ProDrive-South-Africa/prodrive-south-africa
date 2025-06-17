document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('hamburger').onclick = function() {
    document.getElementById('nav-list').classList.toggle('active');
  };
});