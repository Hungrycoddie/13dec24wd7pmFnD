const parent = document.querySelector(".parent");
const child = document.querySelector(".child");
const inner = document.querySelector(".inner");

// Event listener with bubbling (default)
parent.addEventListener("click", () => {
  alert("Parent (Bubbling)");
});

child.addEventListener("click", () => {
  alert("Child (Bubbling)");
});

inner.addEventListener("click", () => {
  alert("Inner (Bubbling)");
});

// Event listener with capturing
parent.addEventListener(
  "click",
  () => {
    alert("Parent (Capturing)");
  },
  true
);

child.addEventListener(
  "click",
  () => {
    alert("Child (Capturing)");
  },
  true
);

inner.addEventListener(
  "click",
  () => {
    alert("Inner (Capturing)");
  },
  true
);
