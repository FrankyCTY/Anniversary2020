// //==========================
// // Main html
// //==========================

// //============================ Initial animations ============================

// function whatsappInit() {
//   const initialTl = gsap.timeline({ defaults: { ease: "power2.inOut" } });
//   initialTl.from("svg", 1.5, { opacity: "0", scale: "0.2", stagger: 0.2 });
// }

// //============================ Event Listeners ============================

// //active animations
// function activeAnimations() {
//   const svgPlus = document.querySelector(".svg-plus");
//   const svgCamera = document.querySelector(".svg-camera");
//   const svgCall = document.querySelector(".svg-call");
//   const svgVideo = document.querySelector(".svg-video");
//   const svgMic = document.querySelector(".mic-svg");
//   const textBox = document.querySelector(".textBox");

//   svgPlus.addEventListener("click", function () {
//     this.classList.toggle("active");
//   });
//   svgVideo.addEventListener("click", function () {
//     this.classList.toggle("active");
//   });
//   svgCall.addEventListener("click", function () {
//     this.classList.toggle("active");
//   });
//   svgCamera.addEventListener("click", function () {
//     this.classList.toggle("active");
//   });
//   svgCamera.addEventListener("animationend", function () {
//     this.classList.remove("active");
//   });

//   svgMic.addEventListener("click", function () {
//     this.classList.toggle("active");
//   });

//   svgMic.addEventListener("animationend", function () {
//     this.classList.remove("active");
//   });

//   textBox.addEventListener("click", function () {
//     this.children[0].classList.add("active");
//   });
// }
