// Typewriter effect
const typed = document.querySelector(".typewriter");

if (typed) {
  let typed_strings = typed.getAttribute("data-typed-items");
  typed_strings = typed_strings.split(",");
  new Typed(".typewriter", {
    strings: typed_strings,
    loop: true,
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 2000,
  });
}
