// console.log('hi')
const header = document.querySelector("#header");

const banner = document.querySelector("#bannerBg");
const bannerFirst = document.querySelector("#bannerBgFirst");
const bannerAddition = document.querySelector("#bannerBgAddition");

const h1Line = document.querySelectorAll(".line span");
const contentP = document.querySelector(".content-inner p");
const contentButton = document.querySelector(".content-inner .btn-row");

const bannerTL = gsap.timeline();

bannerTL
  .from([bannerAddition, bannerFirst, banner], {
    duration: 1.2,
    width: 0,
    skewX: 4,
    ease: "power3.inOut",
    stagger: {
      amount: 0.2,
    },
  })
  .from(header, {
    delay: -0.2,
    y: 16,
    opacity: 0,
    duration: 0.8,
    ease: "power3.inOut",
  })
  .from(h1Line, {
    delay: -0.4,
    y: 80,
    duration: 0.8,
    ease: "power3.out",
    stagger: {
      amount: 0.2,
    },
  })
  .from([contentP, contentButton], {
    delay: -0.6,
    y: -40,
    duration: 0.8,
    opacity: 0,
    ease: "power3.out",
    stagger: {
      amount: 0.2,
    },
  });
