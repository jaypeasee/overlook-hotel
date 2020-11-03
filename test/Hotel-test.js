import chai from 'chai';
const expect = chai.expect;
import Hotel from '../src/Hotel';

describe('Hotel', () => {
  let room1;
  let room2;
  let room3;
  let room4;
  let hotel;

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

//take in array of room numbers that are taken based on the date
  it('should retrieve a list of available rooms', () => {
    expect(hotel.retrieveAvailableRooms([1, 25])).to.deep.equal([room2, room3]);
  })

  it('should be able to retrieve a different list of available rooms', () => {
    expect(hotel.retrieveAvailableRooms([12, 13])).to.deep.equal([room1, room4]);
  })

  //do i need to invoke retrieveAvailableRooms in order for this to work live?
  it('should be able to filter available rooms by type', () => {
    expect(hotel.filterRoomsByType([25], 'single room')).to.deep.equal([room2, room3]);
  })

  it('should be able to filter available rooms by a different type', () => {
    expect(hotel.filterRoomsByType([12, 13], 'residential suite')).to.deep.equal([room1]);
  })
})
