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
loginForm.addEventListener("click", handleLoginClick);
navSection.addEventListener("click", handleNavClick);
mainSection.addEventListener("click", handleMainSectionClick)

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

function handleLoginClick(event) {
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
  currentGuest.sortBookingsByDate("future");
  currentGuest.sortBookingsByDate("past");
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

function displayBookingsList(bookings) {
  const listBlock = mainSection.lastChild.children[1];
  bookings.forEach(booking => {
    const listItem =
    `<li>Room ${booking.roomNumber} on ${booking.date}</li>`;
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

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function handleNavClick(event) {
  if (event.target.className === "date-availability-button") {
    handleAvailableRoomsDisplay(event)
  }
}

function handleAvailableRoomsDisplay(event) {
  const dateInput = event.target.previousElementSibling;
  if (currentGuest.date <= dateInput.value) {
    displayFilteredRoomsByDate(dateInput, event)
  } else {
    displayDateError(event);
  }
}

function displayFilteredRoomsByDate(dateInput, event) {
  removeDateError(event);
  mainSection.innerHTML = "";
  displayHeading(`Available Rooms For ${dateInput.value}`);
  displayRoomTypeForm()
  findOpenRooms(dateInput.value);
}

function removeDateError(event) {
  if (event.target.nextElementSibling) {
    event.target.nextElementSibling.remove();
  }
}

function displayRoomTypeForm() {
  const roomTypeForm =
  `<article class="room-type-form">
    <h2 class="filter-room-title">Filter These Rooms By Type</h2>
    <div class="filter-form-inputs">
      <select name="room-types" id="room-types" class="room-type-inputs">
        <option value="all rooms">all rooms</option>
        <option value="residential suite">residential suite</option>
        <option value="suite">suite</option>
        <option value="junior suite">junior suite</option>
        <option value="single room">single room</option>
      </select>
      <button class="room-type-button">FILTER YOUR SEARCH</button>
    </div>
  </article>`;
  mainSection.insertAdjacentHTML('beforeend', roomTypeForm)
}

function findOpenRooms(datePicked) {
  currentHotel.date = datePicked.replace('-', '/').replace('-', '/')
  const availableRooms = currentHotel.retrieveAvailableRooms(bookingData);
  displayAvailableRooms(availableRooms);
}

function displayAvailableRooms(availableRooms) {
  availableRooms.forEach(room => {
    const roomBlock =
    `<article class="room-cards">
      <h2 class="room-card-title">Room ${room.number}</h2>
      <ul class="room-list">
        <li class="room-list-item"><h3>${room.roomType}</h3></li>
        <li class="room-list-item">${room.numBeds} ${room.bedSize} size beds</li>
        <li class="room-list-item">Cost Per Night: $${room.costPerNight}</li>
        <li class="room-list-item">Bidet?: ${room.bidet}</li>
      </ul>
      <button class="book-room-button">BOOK THIS ROOM</button>
    </article>`
    mainSection.insertAdjacentHTML('beforeEnd', roomBlock)
  })
}

function displayDateError(event) {
  const dateButton = event.target;
  const errorBlock =
  `<p class="date-error">Please enter a valid date to book<p>`
  dateButton.insertAdjacentHTML('afterend', errorBlock);
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function handleMainSectionClick(event) {
  if (event.target.className === 'room-type-button') {
    handleRoomTypeFilter(event);
  }
}

function handleRoomTypeFilter(event) {
  const selectedType = event.target.previousElementSibling
  const filteredRooms = currentHotel.filterRoomsByType(bookingData, selectedType.value);
  console.log(filteredRooms);
  mainSection.innerHTML = "";
  displayHeading(`Available Rooms For ${currentHotel.date}`);
  displayRoomTypeForm()
  displayAvailableRooms(filteredRooms);
}
