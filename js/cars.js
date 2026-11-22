// cars.js - scripts only for cars.html
// Shows all cars, with search by name, filter by type, and sort by price.

document.addEventListener("DOMContentLoaded", function () {
  const list = document.getElementById("car-list");
  const search = document.getElementById("search");
  const typeFilter = document.getElementById("type-filter");
  const sort = document.getElementById("sort");

  function showCars() {
    const text = search.value.toLowerCase();
    const type = typeFilter.value;

    let cars = getCars().filter(function (car) {
      const matchesName = car.name.toLowerCase().includes(text);
      const matchesType = type === "" || car.type === type;
      return matchesName && matchesType;
    });

    if (sort.value === "low") {
      cars.sort(function (a, b) { return a.pricePerDay - b.pricePerDay; });
    } else if (sort.value === "high") {
      cars.sort(function (a, b) { return b.pricePerDay - a.pricePerDay; });
    }

    if (cars.length === 0) {
      list.innerHTML = "<p>No cars match your search.</p>";
    } else {
      list.innerHTML = cars.map(createCarCard).join("");
    }
  }

  search.addEventListener("input", showCars);
  typeFilter.addEventListener("change", showCars);
  sort.addEventListener("change", showCars);

  showCars();
});
