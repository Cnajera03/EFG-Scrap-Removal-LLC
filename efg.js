// INIT EMAILJS
(function () {
  emailjs.init("YOUR_PUBLIC_KEY"); // replace
})();

const form = document.getElementById("callForm");
const msg = document.getElementById("formMsg");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs.sendForm(
    "YOUR_SERVICE_ID",
    "YOUR_TEMPLATE_ID",
    this
  ).then(
    () => {
      msg.textContent = "Request sent! We'll call you shortly.";
      msg.style.color = "green";
      form.reset();
    },
    () => {
      msg.textContent = "Error sending request. Please try again.";
      msg.style.color = "red";
    }
  );
});

document.querySelectorAll(".slideshow").forEach(slideshow => {
  let slides = slideshow.querySelectorAll("img");
  let index = 0;

  setInterval(() => {
    slides[index].classList.remove("active");
    index = (index + 1) % slides.length;
    slides[index].classList.add("active");
  }, 2000); // change image every 3 seconds
});
