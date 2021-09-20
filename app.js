const navBar = document.querySelector('.header');
window.addEventListener('scroll', function () {
  if (pageYOffset > 1) {
    navBar.classList.add('_top');
  } else {
    navBar.classList.remove('_top');
  }
  if (pageYOffset > 500){
    navBar.classList.add('_color');
  } else {
    navBar.classList.remove('_color');
  }
});

const menuBody = document.querySelector('.menu__body');
const iconMenu = document.querySelector('.menu__icon');
if (iconMenu) {
  iconMenu.addEventListener('click', function (e) {
    document.body.classList.toggle('_lock');
    iconMenu.classList.toggle('_active');
    menuBody.classList.toggle('_active');
  });
}

const menuLinks = document.querySelectorAll('.menu__link[data-goto]');

if (menuLinks.length > 0) {
  menuLinks.forEach((menuLink) => {
    menuLink.addEventListener('click', onMenuLinkClick);
  });

  function onMenuLinkClick(e) {
    const menuLink = e.target;
    if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
      const gotoBlock = document.querySelector(menuLink.dataset.goto);
      const gotoBlockValue =
        gotoBlock.getBoundingClientRect().top +
        pageYOffset -
        document.querySelector('.header').offsetHeight;
      if (iconMenu.classList.contains('_active')) {
        document.body.classList.remove('_lock');
        iconMenu.classList.remove('_active');
        menuBody.classList.remove('_active');
      }
      window.scrollTo({
        top: gotoBlockValue,
        behavior: 'smooth',
      });
      e.preventDefault();
    }
  }
}
const score = [
  ["valide", 10],
  ["semantic", 20],
  ["css", 10],
  ["center", 10],
  ["adaptive", 10],
  ["burger", 10],
  ["avatar", 10],
  ['ul > li', 10],
  ["info", 10],
  ["code", 10],
  ["project", 10],
  ["english", 10],
  ["PR", 10],
  ["video", 0],
  ["design", 10],
];

const result = () => {
  let result = 0;
  score.forEach(e => result += e[1]);
  console.log(score)
  return result
};
console.log("My score: ", result());