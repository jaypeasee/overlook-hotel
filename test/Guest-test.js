import chai from 'chai';
const expect = chai.expect;
import Guest from '../src/Guest';
import Hotel from '../src/Hotel';
import { allHotelRooms, allBookings } from './sample-test-data';

describe('Guest', () => {
  let guest1;
  let guest2;
  let hotel;

  beforeEach(() => {
    guest1 = new Guest("customer1", "Remus Lupin");
    guest2 = new Guest("customer2", "Ron Weasley");
    hotel = new Hotel(allHotelRooms);
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

    expect(guest1.totalAmountSpent).to.equal('783.79');
  })

  it('should be able to calculate a total amount for a different guest', () => {
    guest2.calculateTotalSpent(allBookings, hotel);

    expect(guest2.totalAmountSpent).to.equal('847.84');
  })

  it('should be able to organize its booking history', () => {
    guest1.retrieveAllBookings(allBookings);

    expect(guest1.presentBookings).to.deep.equal([allBookings[9]]);
    expect(guest1.futureBookings).to.deep.equal([allBookings[0], allBookings[6], allBookings[7]]);
    expect(guest1.pastBookings).to.deep.equal([allBookings[1], allBookings[4], allBookings[5]]);
  })

  it('should be able to organize its booking history for different user', () => {
    guest2.retrieveAllBookings(allBookings);

    expect(guest2.presentBookings).to.deep.equal([allBookings[8]]);
    expect(guest2.futureBookings).to.deep.equal([]);
    expect(guest2.pastBookings).to.deep.equal([allBookings[3]]);
  })

  it('should be able to sort its past bookings by closest date to today', () => {
    guest1.retrieveAllBookings(allBookings);
    guest1.sortBookingsByDate("future");
    expect(guest1.futureBookings).to.deep.equal([allBookings[6], allBookings[0], allBookings[7]])
  })

  it('should be able to sort its future bookings by closest date to today', () => {
    guest1.retrieveAllBookings(allBookings);
    guest1.sortBookingsByDate("past");
    expect(guest1.pastBookings).to.deep.equal([allBookings[5], allBookings[1], allBookings[4]])
  })
})
