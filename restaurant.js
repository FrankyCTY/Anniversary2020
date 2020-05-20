//==================== Global Variable ====================

//Display Img interval
function displayImg(i) {
  const imgBoxes = document.querySelectorAll(".img-box");
  const displayImgs = document.querySelectorAll(".display-img");

  //Make sure only 1 imgBox can be added an 'active' class
  for (let imgBox of imgBoxes) {
    if (imgBox.children[0].classList.contains("active")) {
      imgBox.children[0].classList.remove("active");
      imgBox.children[1].classList.remove("active");
    }
  }
  //Make sure only 1 displayImg can be added an 'displayed' class
  for (let displayImg of displayImgs) {
    if (displayImg.classList.contains("displayed")) {
      displayImg.classList.remove("displayed");
    }
  }
  //Adding 'active' class
  imgBoxes[i].children[0].classList.toggle("active");
  imgBoxes[i].children[1].classList.toggle("active");

  //Adding 'displayed' class
  const targetDisplayImg = document.querySelector(
    `${imgBoxes[i].dataset.target}`
  );
  targetDisplayImg.classList.add("displayed");

  //Adding animation to display the correct image
}

function autoDisplay() {
  const displayImgs = document.querySelectorAll(".display-img");
  const displayImgsLength = displayImgs.length;
  let i = 0;
  setInterval(() => {
    if (i >= displayImgsLength) {
      i = 0;
    }
    displayImg(i);
    i++;
  }, 4000);
}

//=============================== Event Listeners ===============================
function foodEvent() {
  const imgBoxes = document.querySelectorAll(".img-box");
  const displayImgs = document.querySelectorAll(".display-img");

  imgBoxes.forEach((imgBox) => {
    imgBox.addEventListener("click", function () {
      //Make sure only 1 imgBox can be added an 'active' class
      for (let imgBox of imgBoxes) {
        if (imgBox.children[0].classList.contains("active")) {
          imgBox.children[0].classList.remove("active");
          imgBox.children[1].classList.remove("active");
        }
      }
      //Make sure only 1 displayImg can be added an 'displayed' class
      for (let displayImg of displayImgs) {
        if (displayImg.classList.contains("displayed")) {
          displayImg.classList.remove("displayed");
        }
      }
      //Adding 'active' class
      this.children[0].classList.toggle("active");
      this.children[1].classList.toggle("active");

      //Adding 'displayed' class
      const targetDisplayImg = document.querySelector(`${this.dataset.target}`);
      targetDisplayImg.classList.add("displayed");

      //Adding animation to display the correct image
    });
  });
}

//=============================== scroll magic ===============================
function restaurantScrollMagic() {
  const slides = document.querySelectorAll(".slide");

  const controller = new ScrollMagic.Controller();

  slides.forEach((slide, index) => {
    const pageTl = gsap.timeline();
    const nextSlide = index === slides.length - 1 ? "end" : slides[index + 1];

    pageTl.fromTo(nextSlide, { y: "0%" }, { y: "50%" });
    pageTl.fromTo(
      slide,
      { opacity: "1", scale: "1" },
      { opacity: "0", scale: "0.2" }
    );
    pageTl.fromTo(nextSlide, { y: "50%" }, { y: "0%" }, "-=0.5");

    slideScene = new ScrollMagic.Scene({
      triggerElement: slide,
      triggerHook: 0,
      duration: "100%",
    })
      .setTween(pageTl)
      .setPin(slide, { pushFollowers: false })
      .addTo(controller);
  });
}

// foodEvent();
// autoDisplay();
// restaurantScrollMagic();

// ================ Page Transition =================
// foodEvent();
barba.hooks.enter(() => {
  window.scrollTo(0, 0);
});

barba.init({
  views: [
    {
      namespace: "main",
      beforeEnter() {
        whatsappInit();
        activeAnimations();
        document.body.className = "";
        document.body.classList.add("body--main");
      },
      beforeLeave() {},
    },
    {
      namespace: "restaurant",
      beforeEnter() {
        foodEvent();
        autoDisplay();
        restaurantScrollMagic();
        document.body.className = "";
        document.body.classList.add("body--restaurant");
      },
      beforeLeave() {},
    },
  ],
  transitions: [
    {
      leave(data) {
        let done = this.async();

        const tl = gsap.timeline({ defaults: { ease: "power2.inOut" } });

        tl.to(".pageTranDiv", {
          duration: 0.5,
          scaleY: 1,
          transformOrigin: "bottom left",
          stagger: 0.2,
          onComplete: done,
        });
      },

      enter(data) {
        let done = this.async();

        const tl = gsap.timeline({ defaults: { ease: "power2.inOut" } });
        tl.to(data.current.container, 0.5, { display: "none" });
        tl.to(".pageTranDiv", {
          duration: 0.5,
          scaleY: 0,
          transformOrigin: "bottom left",
          stagger: 0.1,
          delay: 0.1,
          onComplete: done,
        });
      },
    },
  ],
});

//==========================
// Main html
//==========================

//============================ Initial animations ============================

function whatsappInit() {
  const initialTl = gsap.timeline({ defaults: { ease: "power2.inOut" } });
  initialTl.from("svg", 1.5, { opacity: "0", scale: "0.2", stagger: 0.2 });
}

//============================ Event Listeners ============================

//active animations
function activeAnimations() {
  const svgPlus = document.querySelector(".svg-plus");
  const svgCamera = document.querySelector(".svg-camera");
  const svgCall = document.querySelector(".svg-call");
  const svgVideo = document.querySelector(".svg-video");
  const svgMic = document.querySelector(".mic-svg");
  const textBox = document.querySelector(".textBox");

  svgPlus.addEventListener("click", function () {
    this.classList.toggle("active");
  });
  svgVideo.addEventListener("click", function () {
    this.classList.toggle("active");
  });
  svgCall.addEventListener("click", function () {
    this.classList.toggle("active");
  });
  svgCamera.addEventListener("click", function () {
    this.classList.toggle("active");
  });
  svgCamera.addEventListener("animationend", function () {
    this.classList.remove("active");
  });

  svgMic.addEventListener("click", function () {
    this.classList.toggle("active");
  });

  svgMic.addEventListener("animationend", function () {
    this.classList.remove("active");
  });

  textBox.addEventListener("click", function () {
    this.children[0].classList.add("active");
  });
}
