# DriveEasy Car Rental Website

COSC 333 Web Programming project, Rafik Hariri University (Instructor: Dr. Roaa Soloh).

Team: Saad El Dine Younes, Abedelkarim Daher, Houssein Swaid.

A car rental website built with plain **HTML5, CSS and JavaScript** (no frameworks).
Data such as cars, reservations and accounts is kept in the browser's `localStorage`,
since this is a student prototype with no server, real payments or production security.

## How to run

No install needed. Open `index.html` in a browser, or use the VS Code **Live Server**
extension (right-click `index.html` and choose "Open with Live Server").

## Pages

| # | Page | HTML | CSS | JS |
|---|------|------|-----|----|
| 1 | Home | `index.html` | `css/home.css` | `js/home.js` |
| 2 | Browse Cars | `cars.html` | `css/cars.css` | `js/cars.js` |
| 3 | Car Details | `car-details.html` | `css/car-details.css` | `js/car-details.js` |
| 4 | Reservation | `reservation.html` | `css/reservation.css` | `js/reservation.js` |
| 5 | My Reservations | `my-reservations.html` | `css/my-reservations.css` | `js/my-reservations.js` |
| 6 | Login / Sign-up | `login.html` | `css/login.css` | `js/login.js` |
| 7 | Management Dashboard | `dashboard.html` | `css/dashboard.css` | `js/dashboard.js` |
| 8 | About & Contact | `about.html` | `css/about.css` | `js/about.js` |

## Folder structure

```
car-rental/
├── index.html ... about.html   8 pages
├── css/
│   ├── style.css               shared: colors, navbar, footer, buttons, forms, cards, media queries
│   └── <page>.css              styles for one page only
├── js/
│   ├── main.js                 shared: mobile menu toggle, active nav link, footer year
│   ├── data.js                 shared: car list + localStorage helpers
│   └── <page>.js               scripts for one page only
└── images/                     car photos and other images
```

Every page has the same navbar and footer, links `css/style.css` then its own CSS file,
and loads `js/data.js` (if it needs data), then `js/main.js`, then its own JS file.

### Shared data (`js/data.js`)

localStorage keys: `cars`, `reservations`, `users`, `currentUser`.

Helpers: `getCars()`, `saveCars()`, `getCarById(id)`, `getReservations()`,
`saveReservations()`, `getUsers()`, `saveUsers()`, `getCurrentUser()`,
`setCurrentUser(user)`, `logout()`, `daysBetween(start, end)`, `getUrlParam(name)`,
`createCarCard(car)`.

The default car list points to images like `images/corolla.jpg`. Add those photos to
`images/` (or change the paths) so the cards show pictures.

## Team rules

- Only edit **your own page's** HTML, CSS and JS files.
- Changes to shared files (`style.css`, `main.js`, `data.js`, the navbar or footer)
  are agreed with the team first, then made in one small PR so everyone gets them.
- Use the colors and classes in `style.css` (`.btn`, `.card`, `.grid`, `.form-group`)
  so all pages look consistent.

## Git workflow (branch per feature, PRs into main)

1. Get the latest `main`:
   ```
   git checkout main
   git pull
   ```
2. Create a branch for your feature:
   ```
   git checkout -b feature/browse-cars
   ```
3. Commit often with clear messages:
   ```
   git add cars.html css/cars.css js/cars.js
   git commit -m "Add search and filter to Browse Cars"
   ```
4. Push the branch and open a Pull Request into `main` on GitHub:
   ```
   git push -u origin feature/browse-cars
   ```
5. A teammate reviews the PR, then it is merged. Delete the branch after merging.
6. Never push directly to `main`. If `main` changed while you worked, run
   `git pull origin main` on your branch and fix any conflicts before merging.
