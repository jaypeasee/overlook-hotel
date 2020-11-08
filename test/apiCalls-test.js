const chai = require("chai");
const expect = chai.expect;
const spies = require('chai-spies');
chai.use(spies);
const apiCalls = require('../src/apiCalls');

describe('apiCalls', () => {
  before(() => {
    global.apiCalls = {};
    chai.spy.on(apiCalls, ['getBookingData', 'getUserData', 'getRoomData', 'postNewBooking', 'deleteBooking'], () => {})
  })

  it('should be able to call getBookingData once', () => {
    apiCalls.getBookingData();
    expect(apiCalls.getBookingData).to.have.been.called(1);
  })

  it('should not call getBookingData with any arguments', () => {
    apiCalls.getBookingData();
    expect(apiCalls.getBookingData).to.have.been.called.with();
  })

  it('should be able to call getUserData once', () => {
    apiCalls.getUserData();
    expect(apiCalls.getUserData).to.have.been.called(1);
  })

  it('should not call getUserData with any arguments', () => {
    apiCalls.getUserData();
    expect(apiCalls.getUserData).to.have.been.called.with();
  })

  it('should be able to call getRoomData once', () => {
    apiCalls.getRoomData();
    expect(apiCalls.getRoomData).to.have.been.called(1);
  })

  it('should not be able to call getRoomData with any arguments', () => {
    apiCalls.getRoomData();
    expect(apiCalls.getRoomData).to.have.been.called.with();
  })

  it('should be able to call postNewBooking once', () => {
    apiCalls.postNewBooking();
    expect(apiCalls.postNewBooking).to.have.been.called(1);
  })

  it('should call postNewBooking with a formatted booking object', () => {
    let booking = { userID: 1, date: "2020/11/29", roomNumber: 24 };
    apiCalls.postNewBooking(booking);
    expect(apiCalls.postNewBooking).to.have.been.called.with(booking);
  })

  it('should be able to call deleteBooking once', () => {
    apiCalls.deleteBooking()
    expect(apiCalls.deleteBooking).to.have.been.called(1);
  })

  it('should call deleteBooking with an object ID', () => {
    apiCalls.deleteBooking({ id: 6 });
    expect(apiCalls.deleteBooking).to.have.been.called.with({ id: 6 });
  })
})
