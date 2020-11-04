import './css/base.scss';
import './images/turing-logo.png'
import User from './User';
import Guest from './Guest';
import Manager from './Manager';
import Hotel from './Hotel';
import { apiData } from './api-data'

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const loginForm = document.querySelector('.login-form');

let currentUser;
let currentGuest;
let manager;
let hotel;
let bookingData;
let userData;
let roomData;

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

window.addEventListener("load", getApiData);
loginForm.addEventListener("click", handleFormClick);

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function getApiData() {
  const bookings = apiData.getBookingData();
  const users  = apiData.getUserData();
  const rooms = roomData = apiData.getRoomData();
  Promise.all([bookings, users, rooms]).then(data => {
    defineApiData(data[0], data[1], data[2]);
  })
}

function defineApiData(bookings, users, rooms) {
  bookingData = bookings;
  userData = users;
  roomData = rooms;
}

function handleFormClick(event) {
  const usernameInput = document.querySelector('.login-username-input');
  const passwordInput = document.querySelector('.login-password-input');
  if (event.target.className === "login-button"
  && usernameInput.value !== ""
  && passwordInput.value !== "") {
    createUser(usernameInput.value, passwordInput.value);
    clearForm(usernameInput, passwordInput)
  }
}

function createUser(enteredUsername, enteredPassword) {
  currentUser = new User(enteredUsername);
  const userType = currentUser.validateUser(enteredPassword);
  if (userType === "guest") {
    createGuest(enteredUsername)
  } else if (userType === "manager") {
    createManager(enteredUsername)
  } else {
    displayLoginError(userType)
  }
}

function clearForm(usernameInput, passwordInput) {
  usernameInput.value = "";
  passwordInput.value = "";
}

function createGuest(enteredUsername) {
  console.log(userData);
}

function createManager(enteredUsername) {
  console.log("you created a manager!");
}

function displayLoginError(errorMessage) {
  const messageBlock =
  `<h4 class="error-message">${errorMessage}</h4>`
  loginForm.insertAdjacentHTML('beforeend', messageBlock);
}
