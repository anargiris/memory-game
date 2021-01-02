const decompBtn = document.getElementById("decompBtn");
const psyBtn = document.getElementById("psyBtn");
const aquaBtn = document.getElementById("aquaBtn");
const skyBtn = document.getElementById("skyBtn");
const galaxyBtn = document.getElementById("galaxyBtn");

decompBtn.addEventListener("click", () => {
  document.body.style.backgroundImage = "url(nasia.jpg)";
  gsap.from(decompBtn, { duration: 1, rotateX: 180 });
});
psyBtn.addEventListener("click", () => {
  document.body.style.backgroundImage = "url(download.jpg)";

  gsap.from(psyBtn, { duration: 1, rotateX: 180 });
});
aquaBtn.addEventListener("click", () => {
  document.body.style.backgroundImage = "url(aqua.jpg)";

  gsap.from(aquaBtn, { duration: 1, rotateX: 180 });
});
skyBtn.addEventListener("click", () => {
  document.body.style.backgroundImage = "url(sky.jpg)";
  gsap.from(skyBtn, { duration: 1, rotateX: 180 });
});
galaxyBtn.addEventListener("click", () => {
  document.body.style.backgroundImage = "url(orbit.jpg)";
  gsap.from(galaxyBtn, { duration: 1, rotateX: 180 });
});
