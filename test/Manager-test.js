import chai from 'chai';
const expect = chai.expect;
import Manager from '../src/Manager';
import Hotel from '../src/Hotel';
import moment from 'moment';
import { allGuests, allBookings, allHotelRooms } from './sample-test-data'

describe('Manager', () => {
  let manager;
  let hotel;

  beforeEach(() => {
    manager = new Manager("manager");
    hotel = new Hotel(allHotelRooms);
  })

  it('should be a function', () => {
    expect(Manager).to.be.a('function');
  })

  it('should be an instance of Manager', () => {
    expect(manager).to.be.an.instanceof(Manager);
  })

  it('should be able to search for a customer\'s history and return a new Customer', () => {
    expect(manager.searchForGuest("Remus Lupin", allGuests)).to.deep.equal({
      username: 'customerundefined',
      password: 'overlook2020',
      id: undefined,
      date: moment().format('YYYY-MM-DD'),
      name: 'Remus Lupin',
      presentBookings: [],
      futureBookings: [],
      pastBookings: [],
      totalAmountSpent: 0
    });
  })

  it('should be able to search for a different existing customer and return a new Customer', () => {
    expect(manager.searchForGuest("Ron Weasley", allGuests)).to.deep.equal({
      username: 'customerundefined',
      password: 'overlook2020',
      id: undefined,
      date: moment().format('YYYY-MM-DD'),
      name: 'Ron Weasley',
      presentBookings: [],
      futureBookings: [],
      pastBookings: [],
      totalAmountSpent: 0
    });
  })

  it('should return an error if no guest is found from the list', () => {
    expect(manager.searchForGuest("Voldemort", allGuests)).to.equal("error");
  })

  it('should calculate the occupancy for that day', () => {
    expect(manager.calculateOccupancyToday(allBookings,  hotel.rooms.length)).to.equal("50%")
  })

  it('should calculate the revenue for that day', () => {
    expect(manager.calculateRevenueToday(allBookings, hotel)).to.equal(729.77)
  })
})
