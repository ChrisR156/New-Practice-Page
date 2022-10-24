let throttleTimer = false;

const throttle = (callback, time) => {
  //don't run the function while throttle timer is true
  if (throttleTimer) return;

  //first set throttle timer to true so the function doesn't run
  throttleTimer = true;

  setTimeout(() => {
    //call the callback function in the setTimeout and set the throttle timer to false after the indicated time has passed
    callback();
    throttleTimer = false;
  }, time);
};

var nav = document.querySelector(".header");

window.addEventListener("scroll", function () {
  if (window.pageYOffset > 100) {
    nav.classList += " section-header";
  } else {
    nav.classList = "header";
  }
});

// var nav = document.querySelector('.for-script');

// window.addEventListener('scroll', function(){
// 	if(window.pageYOffset > 1000) {
// 		nav.classList += ' for-script'
// 	} else {
// 		nav.classList = 'for-script'
// 	}
// })

// const scrollElement = document.querySelector(".js-scroll");

// const elementInView = (el, offset = 0) => {
//   const elementTop = el.getBoundingClientRect().top;

//   return (
//     elementTop <=
//     (window.innerHeight || document.documentElement.clientHeight) - offset
//   );
// };

// const displayScrollElement = () => {
//   scrollElement.classList.add("scrolled");
// };

// const hideScrollElement = () => {
//   scrollElement.classList.remove("scrolled");
// };

// const handleScrollAnimation = () => {
//   if (elementInView(scrollElement, scrollOffset)) {
//     displayScrollElement();
//   } else {
//     hideScrollElement();
//   }
// };

// window.addEventListener("scroll", () => {
//   handleScrollAnimation();
// });

const scrollOffset = 100;

const scrollElements = document.querySelectorAll(".js-scroll");

scrollElements.forEach((el) => {
  el.style.opacity = 0;
});

const elementInView = (el, percentageScroll = 100) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) *
      (percentageScroll / 100)
  );
};

const displayScrollElement = (element) => {
  element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
  element.classList.remove("scrolled");
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 100)) {
      displayScrollElement(el);
    } else {
      hideScrollElement(el);
    }
  });
};

window.addEventListener("scroll", () => {
  throttle(handleScrollAnimation, 250);
});
