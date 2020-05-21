function countDown() {
  const cardSub = document.querySelector(".card__subtitle");
  const cardFront = document.querySelector(".card-front");

  // Set the date we're counting down to
  var countDownDate = new Date("May 21, 2020 23:59:59").getTime();

  // Update the count down every 1 second
  var x = setInterval(function () {
    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="demo"
    cardSub.innerHTML =
      hours + " hours " + minutes + " minutes " + seconds + " seconds ";

    // If the count down is over, write some text
    if (distance < 0) {
      clearInterval(x);
      cardSub.innerHTML =
        "VENUS, I LOVE YOU <br /> See you in the next anniversary";

      const tl = gsap.timeline({
        defaults: { duration: 1, ease: "power2.inOut" },
      });
    }
  }, 1000);
}

countDown();
