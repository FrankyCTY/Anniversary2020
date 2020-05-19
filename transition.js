// ================ Page Transition =================

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

      // async once(data) {
      //   contentAnimation();
      // },
    },
  ],
});
