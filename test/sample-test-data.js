import moment from 'moment';

const hotelRoom1 = {
  number: 1,
  roomType: "residential suite",
  bidet: true, bedSize: "queen",
  numBeds: 1,
  costPerNight: 358.4
};

const hotelRoom2 = {
  number: 12,
  roomType: "single room",
  bidet: false,
  bedSize: "twin",
  numBeds: 2,
  costPerNight: 172.09
};

const hotelRoom3 = {
  number: 13,
  roomType: "single room",
  bidet: false,
  bedSize: "queen",
  numBeds: 2,
  costPerNight: 423.92
};

const hotelRoom4 = {
  number: 25,
  roomType: "single room",
  bidet: true,
  bedSize: "queen",
  numBeds: 1,
  costPerNight: 305.85
};

const booking1 = {
  id: "5fwrgu4i7k55hl6sz",
  userID: 1,
  date:"2020/12/22",
  roomNumber: 25,
  roomServiceCharges: []
};

const booking2 = {
  id: "5fwrgu4i7k55hl8bkl",
  userID: 1,
  date: "2020/06/18",
  roomNumber: 12,
  roomServiceCharges: []
};

const booking3 = {
  id: "5fwrgu4i7k55hl6tr",
  userID : 45,
  date: "2020/01/24",
  roomNumber: 12,
  roomServiceCharges: []
};

const booking4 = {
  id: "5fwrgu4i7k55hl6tv",
  userID: 2,
  date: "2020/01/19",
  roomNumber: 13,
  roomServiceCharges: []
}

const booking5 = {
  id: "5fwrgu4i7k55hl6tv",
  userID: 1,
  date: "2020/01/19",
  roomNumber: 6,
  roomServiceCharges: []
}

const booking6 = {
  id: "5fwrgu4i7k55hl6tv",
  userID: 1,
  date: "2020/09/19",
  roomNumber: 4,
  roomServiceCharges: []
}

const booking7 = {
  id: "5fwrgu4i7k55hl6tv",
  userID: 1,
  date: "2020/12/19",
  roomNumber: 23,
  roomServiceCharges: []
}

const booking8 = {
  id: "5fwrgu4i7k55hl6tv",
  userID: 1,
  date: "2020/12/25",
  roomNumber: 23,
  roomServiceCharges: []
}

const booking9 = {
  id: "5fwrgu4i7k55hl6tv",
  userID: 2,
  date: moment().format('YYYY-MM-DD'),
  roomNumber: 13,
  roomServiceCharges: []
}

const booking10 = {
  id: "5fwrgu4i7kdfhl6tv",
  userID: 1,
  date: moment().format('YYYY-MM-DD'),
  roomNumber: 25,
  roomServiceCharges: []
};

const guest1 = { username: "customer1", name: "Remus Lupin" };
const guest2 = { username: "customer2", name: "Ron Weasley" };
const guest3 = { username: "customer3", name: "Neville Longbottom"};

export const allHotelRooms = [
  hotelRoom1,
  hotelRoom2,
  hotelRoom3,
  hotelRoom4
];

export const allBookings = [
  booking1,
  booking2,
  booking3,
  booking4,
  booking5,
  booking6,
  booking7,
  booking8,
  booking9,
  booking10
];

export const allGuests = [guest1, guest2, guest3];
