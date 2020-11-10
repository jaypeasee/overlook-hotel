import chai from 'chai';
const expect = chai.expect;
import Hotel from '../src/Hotel';
import { allHotelRooms, allBookings } from './sample-test-data';
import moment from 'moment';

describe('Hotel', () => {
  let hotel;

  beforeEach(() => {
    hotel = new Hotel(allHotelRooms);
  })

  it('should be a function', () => {
    expect(Hotel).to.be.a('function');
  })

  it('should be an instance of Hotel', () => {
    expect(hotel).to.be.an.instanceof(Hotel);
  })

  it('should have a complete list of rooms', () => {
    expect(hotel.rooms).to.deep.equal([allHotelRooms[0], allHotelRooms[1], allHotelRooms[2], allHotelRooms[3]]);
  })

  it('should have a default date of today', () => {
    expect(hotel.date).to.equal(moment().format('YYYY/MM/DD'));
  })

  it('should be able to assign a date', () => {
    hotel.date = "2020/01/24";
    expect(hotel.date).to.equal("2020/01/24");
  })

  it('should retrieve a list of available rooms by date', () => {
    hotel.date = "2020/01/24";
    expect(hotel.retrieveAvailableRooms(allBookings)).to.deep.equal([allHotelRooms[0], allHotelRooms[2], allHotelRooms[3]]);
  })

  it('should be able to retrieve a different list of available rooms', () => {
    hotel.date = "2020/06/18"
    expect(hotel.retrieveAvailableRooms(allBookings)).to.deep.equal([allHotelRooms[0], allHotelRooms[2], allHotelRooms[3]]);
  })

  it('should be able to filter available rooms by type', () => {
    hotel.date = "2020/12/22";
    expect(hotel.filterRoomsByType(allBookings, 'single room')).to.deep.equal([allHotelRooms[1], allHotelRooms[2]]);
  })

  it('should be able to filter available rooms by a different type', () => {
    hotel.date = "2020/12/22";
    expect(hotel.filterRoomsByType(allBookings, 'residential suite')).to.deep.equal([allHotelRooms[0]]);
  })

  it('should be able to show all rooms when it doesn\'t want to filter by a room type', () => {
    hotel.date = "2020/06/18";
    expect(hotel.filterRoomsByType(allBookings, 'all rooms')).to.deep.equal([allHotelRooms[0], allHotelRooms[2], allHotelRooms[3]]);
  })
})
