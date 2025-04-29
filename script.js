// Scroll animation
const scrollElements = document.querySelectorAll('.scroll-animate');

function scrollAnimation() {
  const triggerBottom = window.innerHeight / 5 * 4;

  scrollElements.forEach(element => {
    const boxTop = element.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      element.classList.add('active');
    } else {
      element.classList.remove('active');
    }
  });
}

window.addEventListener('scroll', scrollAnimation);
