import './css/base.scss';
import './images/turing-logo.png'
import User from './User';
import Guest from './Guest';
import Manager from './Manager';
import Hotel from './Hotel';
import { apiData } from './api-data'

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const mainSection = document.querySelector('main');
const navSection = document.querySelector('nav');
const loginForm = document.querySelector('.login-form');
let currentGuest;
let currentManager;
let currentHotel;
let bookingData;
let userData;

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

window.addEventListener("load", getApiData);
loginForm.addEventListener("click", handleFormClick);

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function getApiData() {
  const bookings = apiData.getBookingData();
  const users  = apiData.getUserData();
  const rooms = apiData.getRoomData();
  Promise.all([bookings, users, rooms]).then(data => {
    defineApiData(data[0], data[1], data[2]);
  })
}

function defineApiData(bookings, users, rooms) {
  bookingData = bookings;
  userData = users;
  currentHotel = new Hotel(rooms);
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function handleFormClick(event) {
  const usernameInput = document.querySelector('.login-username-input');
  const passwordInput = document.querySelector('.login-password-input');
  if (event.target.className === "login-button"
  && usernameInput.value !== ""
  && passwordInput.value !== "") {
    createUser(usernameInput.value, passwordInput.value);
    clearForm(usernameInput, passwordInput);
  }
}

function createUser(enteredUsername, enteredPassword) {
  const currentUser = new User(enteredUsername);
  const userType = currentUser.validateUser(enteredPassword);
  if (userType === "guest") {
    createGuest(currentUser);
    clearError();
  } else if (userType === "manager") {
    createManager(currentUser);
    clearError();
  } else {
    displayLoginError(userType);
  }
}

function clearForm(usernameInput, passwordInput) {
  usernameInput.value = "";
  passwordInput.value = "";
}

function createGuest(currentUser) {
  const matchedGuest = userData.find(user => {
    return user.id === currentUser.id;
  })
  currentGuest = new Guest(`customer${matchedGuest.id}`, matchedGuest.name);
  runGuestMethods()
  displayGuestHome();
}

function runGuestMethods() {
  currentGuest.calculateTotalSpent(bookingData, currentHotel);
  currentGuest.retrieveAllBookings(bookingData);
}

function displayGuestHome() {
  clearHome();
  displayGuestNav();
  displayHeading("Your Reservations");
  handleBookingsDisplay()
}

function displayGuestNav() {
  const navBlock =
    `<div class="guest-nav">
      <div class="nav-headings">
        <h2 class="nav-text">Welcome ${currentGuest.name}!</h2>
        <h3 class="nav-text">${currentGuest.date}</h3>
      </div>
      <div class="nav-details">
        <article class="nav-booking-form">
          <h3 class="nav-form-heading nav-text">Book A Room</h3>
          <input aria-label="date-input" type="date" class="date-availability-input">
          <button class="date-availability-button">CHECK AVAILABILITY!</button>
        </article>
        <h4 class="nav-text">Total Amount Spent on Rooms: $${currentGuest.totalAmountSpent}</h4>
      </div>
    </div>`
  navSection.insertAdjacentHTML('afterbegin', navBlock);
}

function displayHeading(sectionHeading) {
  const headingBlock =
  `<h1 class="main-title">${sectionHeading}</h1>`;
  mainSection.insertAdjacentHTML('afterbegin', headingBlock);
}

function handleBookingsDisplay() {
  if (currentGuest.presentBookings.length > 0) {
    displayBookings('Current Bookings', currentGuest.presentBookings);
  }
  if (currentGuest.futureBookings.length > 0) {
    displayBookings('Future Bookings', currentGuest.futureBookings);
  }
  if (currentGuest.pastBookings.length > 0) {
    displayBookings('Past Bookings', currentGuest.pastBookings);
  }
}

function displayBookings(cardTitle, bookings) {
  const bookingBlock =
    `<article class="reservation-cards">
      <h2>${cardTitle}</h2>
      <ul class="room-history-list">
      </ul>
    </article>`
  mainSection.insertAdjacentHTML('beforeend', bookingBlock);
  displayBookingsList(bookings);
}

//these bookings need to get sorted in the Guest class
function displayBookingsList(bookings) {
  const listBlock = mainSection.lastChild.children[1];
  bookings.forEach(booking => {
    const listItem =
    `<li class="booking-list-item">Room ${booking.roomNumber} on ${booking.date}</li>`;
    listBlock.insertAdjacentHTML('beforeend', listItem);
  })
}

function createManager(currentUser) {
  currentManager = new Manager(currentUser.username);
  clearHome();
}

function clearHome() {
  mainSection.innerHTML = "";
  navSection.innerHTML = "";
}

function clearError() {
  if (loginForm.children[4]) {
    loginForm.children[4].remove();
  }
}

function displayLoginError(errorMessage) {
  const messageBlock =
  `<h4 class="error-message">${errorMessage}</h4>`;
  loginForm.insertAdjacentHTML('beforeend', messageBlock);
}
