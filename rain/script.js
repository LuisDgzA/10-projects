function createHeart() {
  const taco = document.createElement("div");
  taco.classList.add("taco");
  taco.innerHTML = "&#127790;";
  taco.style.left = Math.random() * 100 + "vw";
  taco.style.animationDuration = Math.random() * 3 + 2 + "s";
  document.body.appendChild(taco);

  setTimeout(() => {
    taco.remove();
  }, 5000);
}

setInterval(createHeart, 400);
