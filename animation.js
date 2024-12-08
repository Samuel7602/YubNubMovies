function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.bottom <= window.innerHeight
  );
}

const scrollElements = document.querySelectorAll('.scroll-animation');

function onScroll() {
  scrollElements.forEach((element) => {
    if (isInViewport(element) && !element.classList.contains('animate')) {
      element.classList.add('animate'); 
    }
  });
}

window.addEventListener('scroll', onScroll);

onScroll();

