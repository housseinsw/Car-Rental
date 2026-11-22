// data.js - shared data and localStorage helpers
// Load this BEFORE the page's own script on any page that needs cars,
// reservations, or users.
//
// localStorage keys:
//   "cars"         -> array of car objects
//   "reservations" -> array of reservation objects
//   "users"        -> array of user objects
//   "currentUser"  -> the logged-in user object (or nothing)

const defaultCars = [
  {
    id: 1,
    name: "Toyota Corolla",
    type: "Sedan",
    year: 2022,
    seats: 5,
    transmission: "Automatic",
    fuel: "Petrol",
    pricePerDay: 35,
    available: true,
    image: "images/corolla.jpg",
    featured: true
  },
  {
    id: 2,
    name: "Hyundai Tucson",
    type: "SUV",
    year: 2023,
    seats: 5,
    transmission: "Automatic",
    fuel: "Petrol",
    pricePerDay: 55,
    available: true,
    image: "images/tucson.jpg",
    featured: true
  },
  {
    id: 3,
    name: "Kia Picanto",
    type: "Hatchback",
    year: 2021,
    seats: 4,
    transmission: "Manual",
    fuel: "Petrol",
    pricePerDay: 25,
    available: true,
    image: "images/picanto.jpg",
    featured: false
  },
  {
    id: 4,
    name: "Mercedes C-Class",
    type: "Luxury",
    year: 2023,
    seats: 5,
    transmission: "Automatic",
    fuel: "Petrol",
    pricePerDay: 110,
    available: false,
    image: "images/c-class.jpg",
    featured: true
  },
  {
    id: 5,
    name: "Toyota Hiace",
    type: "Van",
    year: 2020,
    seats: 12,
    transmission: "Manual",
    fuel: "Diesel",
    pricePerDay: 80,
    available: true,
    image: "images/hiace.jpg",
    featured: false
  },
  {
    id: 6,
    name: "Nissan Sunny",
    type: "Sedan",
    year: 2022,
    seats: 5,
    transmission: "Automatic",
    fuel: "Petrol",
    pricePerDay: 30,
    available: true,
    image: "images/sunny.jpg",
    featured: false
  }
];

// ---------- Generic helpers ----------
function loadData(key, fallback) {
  const saved = localStorage.getItem(key);
  if (saved === null) {
    return fallback;
  }
  return JSON.parse(saved);
}

function saveData(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

// ---------- Cars ----------
function getCars() {
  return loadData("cars", defaultCars);
}

function saveCars(cars) {
  saveData("cars", cars);
}

function getCarById(id) {
  return getCars().find(function (car) {
    return car.id === Number(id);
  });
}

// ---------- Reservations ----------
// A reservation looks like:
// { id, carId, userEmail, fullName, phone, pickupDate, returnDate,
//   days, total, status: "pending" | "approved" | "rejected" | "cancelled" }
function getReservations() {
  return loadData("reservations", []);
}

function saveReservations(reservations) {
  saveData("reservations", reservations);
}

// ---------- Users ----------
// A user looks like: { name, email, password, role: "customer" | "admin" }
function getUsers() {
  return loadData("users", []);
}

function saveUsers(users) {
  saveData("users", users);
}

function getCurrentUser() {
  return loadData("currentUser", null);
}

function setCurrentUser(user) {
  saveData("currentUser", user);
}

function logout() {
  localStorage.removeItem("currentUser");
}

// ---------- Utilities ----------
// Number of rental days between two "YYYY-MM-DD" strings
function daysBetween(start, end) {
  const msPerDay = 1000 * 60 * 60 * 24;
  return Math.round((new Date(end) - new Date(start)) / msPerDay);
}

// Read a value from the URL, e.g. getUrlParam("id") on car-details.html?id=3
function getUrlParam(name) {
  return new URLSearchParams(window.location.search).get(name);
}

// Builds the HTML for one car card (used on Home and Browse Cars)
function createCarCard(car) {
  const status = car.available ? "Available" : "Not available";
  return `
    <article class="card car-card">
      <img src="${car.image}" alt="${car.name}" class="car-image">
      <div class="card-body">
        <h3>${car.name}</h3>
        <p>${car.type} &middot; ${car.seats} seats &middot; ${car.transmission}</p>
        <p class="price">$${car.pricePerDay} / day</p>
        <p class="status">${status}</p>
        <a href="car-details.html?id=${car.id}" class="btn">View Details</a>
      </div>
    </article>`;
}
