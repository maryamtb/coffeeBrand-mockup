const header = document.querySelector("#header");

const bannerAddition = document.querySelector("#bannerBgAddition");
const banner = document.querySelector("#bannerBg");

const contentP = document.querySelector(".content-inner p");
const contentButton = document.querySelector(".content-inner .btn-row");

const h1Line = document.querySelector(".line span");

const grain = document.querySelector(".image-inner img");

const formulas = document.querySelector(".formulas");

const formulaT = document.querySelector(".formula-title h1");
const formulaCT = document.querySelectorAll(".selection h2");
const formulaCP = document.querySelectorAll(".selection p");

const bannerTL = gsap.timeline();

bannerTL
  .from([bannerAddition, banner], {
    duration: 1.2,
    y: 1440,
    x: 0,
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
  })
  .to(formulas, {
    delay: 2.2,
    duration: 0.8,
    ease: "expo.inOut",
  });

gsap.from(grain, {
  delay: 2.2,
  x: -100,
  skewX: 4,
  duration: 0.8,
  opacity: 0,
  ease: "power3.out",
});

const formulaTL = gsap.timeline();

formulaTL
  .from(formulaT, {
    delay: 0.6,
    opacity: 0,
    y: 10,
    duration: 0.6,
    ease: "power3.out",
    stagger: {
      amount: 1,
    },
  })
  .from([formulaCP, formulaCT], {
    delay: -0.4,
    opacity: 0,
    y: 30,
    duration: 0.8,
    ease: "power3.out",
    stagger: {
      amount: 0.4,
    },
  });


const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
  triggerElement: "#shop",
  triggerHook: 0,
  reverse: false,
})
  // .addIndicators()
  .setTween(formulaTL)
  .addTo(controller);
