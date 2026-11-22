// home.js - scripts only for index.html
// Shows the featured cars from the shared list in js/data.js

document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("featured-cars");
  const featured = getCars().filter(function (car) {
    return car.featured;
  });

  container.innerHTML = featured.map(createCarCard).join("");
});
