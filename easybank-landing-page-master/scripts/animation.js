gsap.registerPlugin(ScrollTrigger);

const maskEl = document.querySelectorAll("main .mask-element");
const asideMaskEl = document.querySelectorAll("aside .mask-element");
const aside = document.querySelectorAll("aside");
const footerLi = document.querySelectorAll("footer li");

const animateEl = function (el) {
  el.forEach((mE) => {
    gsap.to(mE, {
      xPercent: -100,
    });
  });

  el.forEach((mE) => {
    ScrollTrigger.create({
      trigger: mE,
      onEnter: () => {
        gsap.to(mE, {
          xPercent: 0,
          duration: 0.5,
          ease: "back",
        });
      },
      onLeave: () => {
        gsap.to(mE, {
          xPercent: -100,
          duration: 0.5,
          ease: "back",
        });
      },
      onEnterBack: () => {
        gsap.to(mE, {
          xPercent: 0,
          duration: 0.5,
          ease: "back",
        });
      },
      onLeaveBack: () => {
        gsap.to(mE, {
          xPercent: -100,
          duration: 0.5,
          ease: "back",
        });
      },
    });
  });
};
animateEl(maskEl);

const animateAsideEl = function (el) {
  el.forEach((mE) => {
    gsap.to(mE, {
      yPercent: 150,
    });
  });

  el.forEach((mE) => {
    ScrollTrigger.create({
      trigger: mE,
      start: "-300% 60%",
      end: "bottom 15%",
      onEnter: () => {
        gsap.to(mE, {
          yPercent: 0,
          duration: 0.5,
          ease: "back",
        });
      },
      onLeave: () => {
        gsap.to(mE, {
          yPercent: 150,
          duration: 0.5,
          ease: "back",
        });
      },
      onEnterBack: () => {
        gsap.to(mE, {
          yPercent: 0,
          duration: 0.5,
          ease: "back",
        });
      },
      onLeaveBack: () => {
        gsap.to(mE, {
          yPercent: 150,
          duration: 0.5,
          ease: "back",
        });
      },
    });
  });
};
animateAsideEl(asideMaskEl);
gsap.to(aside, {
  scrollTrigger: {
    trigger: aside,
    onEnter: () => {
      document.documentElement.classList.add("dark");
    },
    onEnterBack: () => {
      document.documentElement.classList.add("dark");
    },
    onLeaveBack: () => {
      document.documentElement.classList.remove("dark");
    },
  },
});

footerLi.forEach((fL) => {
  gsap.from(fL, {
    xPercent: -100,
    duration: 0.5,
    scrollTrigger: {
      trigger: fL,
    },
  });
});
