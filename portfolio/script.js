const reveals = document.querySelectorAll('.reveal');

function revealScroll() {
  const trigger = window.innerHeight * 0.85;

  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < trigger) {
      el.classList.add('active');
    }
  });
}
window.addEventListener('scroll', revealScroll);
window.addEventListener('load', revealScroll);
