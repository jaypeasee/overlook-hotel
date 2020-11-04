import chai from 'chai';
const expect = chai.expect;
import Manager from '../src/Manager';
import Guest from '../src/Guest';
import Hotel from '../src/Hotel';

describe('Manager', () => {
  let manager;
  let guest1;
  let guest2;
  let guest3;
  let allGuests;
  let hotelRoom1;
  let hotelRoom2;
  let hotelRoom3;
  let hotelRoom4;
  let hotel;
  let booking1;
  let booking2;
  let booking3;
  let booking4;
  let allBookings;

  beforeEach(() => {
    manager = new Manager("manager");
    guest1 = new Guest("customer1", "Remus Lupin");
    guest2 = new Guest("customer2", "Ron Weasley");
    guest3 = new Guest("customer3", "Neville Longbottom");
    allGuests = [guest1, guest2, guest3]
    hotelRoom1 = {
      number: 1,
      roomType: "residential suite",
      bidet: true, bedSize: "queen",
      numBeds: 1,
      costPerNight: 358.4
    };

    hotelRoom2 = {
      number: 12,
      roomType: "single room",
      bidet: false,
      bedSize: "twin",
      numBeds: 2,
      costPerNight: 172.09
    };

    hotelRoom3 = {
      number: 13,
      roomType: "single room",
      bidet: false,
      bedSize: "queen",
      numBeds: 2,
      costPerNight: 423.92
    };

    hotelRoom4 = {
      number: 25,
      roomType: "single room",
      bidet: true,
      bedSize: "queen",
      numBeds: 1,
      costPerNight: 305.85
    };

    hotel = new Hotel([hotelRoom1, hotelRoom2, hotelRoom3, hotelRoom4]);

    booking1 = {
      id: "5fwrgu4i7k55hl6sz",
      userID: 1,
      date:"2020/12/22",
      roomNumber: 25,
      roomServiceCharges: []
    };

    booking2 = {
      id: "5fwrgu4i7k55hl8bkl",
      userID: 1,
      date: "2020/06/18",
      roomNumber: 12,
      roomServiceCharges: []
    };

    booking3 = {
      id: "5fwrgu4i7k55hl6tr",
      userID : 45,
      date: "2020/01/24",
      roomNumber: 12,
      roomServiceCharges: []
    };

    booking4 = {
      id: "5fwrgu4i7k55hl6tv",
      userID: 2,
      date: new Date().toISOString().split('T')[0],
      roomNumber: 13,
      roomServiceCharges: []
    }

    allBookings = [booking1, booking2, booking3, booking4];
  })

  it('should be a function', () => {
    expect(Manager).to.be.a('function');
  })

  it('should be an instance of Manager', () => {
    expect(manager).to.be.an.instanceof(Manager);
  })

  it('should be able to search for a customer\'s history', () => {
    guest1.calculateTotalSpent(allBookings, hotel);
    guest1.retrieveAllBookings(allBookings);

    expect(manager.userSearch("Remus Lupin", allGuests)).to.equal(guest1);
  })

  it('should be able to search for a different existing customer', () => {
    guest2.calculateTotalSpent(allBookings, hotel);
    guest2.retrieveAllBookings(allBookings);

    expect(manager.userSearch("Ron Weasley", allGuests)).to.equal(guest2);
  })

  it('should send an alert message if a user is not found on name search', () => {
    expect(manager.userSearch("Severus Snape", allGuests)).to.equal("No customers have been found under the name of 'Severus Snape'.");
  })

  it('should calculate the occupancy for that day', () => {
    expect(manager.calculateOccupancyToday(allBookings,  hotel.rooms.length)).to.equal("25%")
  })

  it('should calculate the revenue for that day', () => {
    expect(manager.calculateRevenueToday(allBookings, hotel)).to.equal(423.92)
  })
})
