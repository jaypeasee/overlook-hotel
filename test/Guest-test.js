import chai from 'chai';
const expect = chai.expect;
import Guest from '../src/Guest';
import Hotel from '../src/Hotel';

describe('Guest', () => {
  let guest1;
  let guest2;
  let hotelRoom1;
  let hotelRoom2;
  let hotelRoom3;
  let hotelRoom4;
  let hotel;
  let booking1;
  let booking2;
  let booking3;
  let booking4;
  let booking5;
  let booking6;
  let booking7;
  let booking8;
  let allBookings;

  beforeEach(() => {
    guest1 = new Guest("customer1", "Remus Lupin");
    guest2 = new Guest("customer2", "Ron Weasley");

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
      date: "2020/01/19",
      roomNumber: 13,
      roomServiceCharges: []
    }

    booking5 = {
      id: "5fwrgu4i7k55hl6tv",
      userID: 1,
      date: "2020/01/19",
      roomNumber: 6,
      roomServiceCharges: []
    }

    booking6 = {
      id: "5fwrgu4i7k55hl6tv",
      userID: 1,
      date: "2020/09/19",
      roomNumber: 4,
      roomServiceCharges: []
    }

    booking7 = {
      id: "5fwrgu4i7k55hl6tv",
      userID: 1,
      date: "2020/12/19",
      roomNumber: 23,
      roomServiceCharges: []
    }

    booking8 = {
      id: "5fwrgu4i7k55hl6tv",
      userID: 1,
      date: "2020/12/25",
      roomNumber: 23,
      roomServiceCharges: []
    }


    allBookings = [
      booking1,
      booking2,
      booking3,
      booking4,
      booking5,
      booking6,
      booking7,
      booking8
    ];
  })

  it('should be a function', () => {
    expect(Guest).to.be.a('function');
  })

  it('should be an instance of Guest', () => {
    expect(guest1).to.be.an.instanceof(Guest);
  })

  it('should have a name', () => {
    expect(guest1.name).to.equal("Remus Lupin");
  })

  it('should be able to have a different name', () => {
    expect(guest2.name).to.equal("Ron Weasley");
  })

  it('should have no current bookings to start', () => {
    expect(guest1.presentBookings).to.deep.equal([]);
  })

  it('should have no future bookings to start', () => {
    expect(guest1.futureBookings).to.deep.equal([]);
  })

  it('should have no past bookings to start', () => {
    expect(guest1.pastBookings).to.deep.equal([]);
  })

  it('should have no totalAmount spent to start', () => {
    expect(guest1.totalAmountSpent).to.equal(0);
  })

  it('should be able to calculate total amount spent at the hotel for a guest', () => {
    guest1.calculateTotalSpent(allBookings, hotel);

    expect(guest1.totalAmountSpent).to.equal(477.94);
  })

  it('should be able to calculate a total amount for a different guest', () => {
    guest2.calculateTotalSpent(allBookings, hotel);

    expect(guest2.totalAmountSpent).to.equal(423.92);
  })

  it('should be able to organize its booking history', () => {
    guest1.retrieveAllBookings(allBookings);

    expect(guest1.presentBookings).to.deep.equal([]);
    expect(guest1.futureBookings).to.deep.equal([booking1]);
    expect(guest1.pastBookings).to.deep.equal([booking2]);
  })

  it('should be able to organize its booking history for different user', () => {
    guest2.retrieveAllBookings(allBookings);

    expect(guest2.presentBookings).to.deep.equal([]);
    expect(guest2.futureBookings).to.deep.equal([]);
    expect(guest2.pastBookings).to.deep.equal([booking4]);
  })

  it('should be able to sort its past bookings by closest date to today', () => {
    guest1.retrieveAllBookings(allBookings);
    guest1.sortBookingsByDate("future");
    expect(guest1.futureBookings).to.deep.equal([booking7, booking1, booking8])
  })

  it.only('should be able to sort its future bookings by closest date to today', () => {
    guest1.retrieveAllBookings(allBookings);
    guest1.sortBookingsByDate("past");
    expect(guest1.pastBookings).to.deep.equal([booking6, booking2, booking5])
  })
})
