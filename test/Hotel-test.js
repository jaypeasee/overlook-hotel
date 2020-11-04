import chai from 'chai';
const expect = chai.expect;
import Hotel from '../src/Hotel';

describe('Hotel', () => {
  let room1;
  let room2;
  let room3;
  let room4;
  let hotel;
  let booking1;
  let booking2;
  let booking3;
  let booking4;
  let allBookings;

  beforeEach(() => {
    room1 = {
      number: 1,
      roomType: "residential suite",
      bidet: true, bedSize: "queen",
      numBeds: 1,
      costPerNight: 358.4
    };

    room2 = {
      number: 12,
      roomType: "single room",
      bidet: false,
      bedSize: "twin",
      numBeds: 2,
      costPerNight: 172.09
    };

    room3 = {
      number: 13,
      roomType: "single room",
      bidet: false,
      bedSize: "queen",
      numBeds: 2,
      costPerNight: 423.92
    };

    room4 = {
      number: 25,
      roomType: "single room",
      bidet: true,
      bedSize: "queen",
      numBeds: 1,
      costPerNight: 305.85
    };

    hotel = new Hotel([room1, room2, room3, room4]);

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
      roomNumber: 1,
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
    expect(Hotel).to.be.a('function');
  })

  it('should be an instance of Hotel', () => {
    expect(hotel).to.be.an.instanceof(Hotel);
  })

  it('should have a complete list of rooms', () => {
    expect(hotel.rooms).to.deep.equal([room1, room2, room3, room4]);
  })

  it('should retrieve a list of available rooms by date', () => {
    expect(hotel.retrieveAvailableRooms("2020/01/24", allBookings)).to.deep.equal([room1, room3, room4]);
  })

  it('should be able to retrieve a different list of available rooms', () => {
    expect(hotel.retrieveAvailableRooms("2020/06/18", allBookings)).to.deep.equal([room2, room3, room4]);
  })

  it('should be able to filter available rooms by type', () => {
    expect(hotel.filterRoomsByType("2020/12/22", allBookings, 'single room')).to.deep.equal([room2, room3]);
  })

  it('should be able to filter available rooms by a different type', () => {
    expect(hotel.filterRoomsByType("2020/12/22", allBookings, 'residential suite')).to.deep.equal([room1]);
  })
})
