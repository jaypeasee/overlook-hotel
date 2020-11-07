const chai = require("chai");
const expect = chai.expect;
const spies = require('chai-spies');
chai.use(spies);
const apiData = require('../src/api-data');

describe('apiData', () => {
  before(() => {
    global.apiData = {};
    chai.spy.on(apiData, ['getBookingData', 'getUserData', 'getRoomData', 'postNewBooking'], () => {})
  })

  it('should be able to call getBookingData once', () => {
    apiData.getBookingData();
    expect(apiData.getBookingData).to.have.been.called(1);
  })

  it('should not call getBookingData with any arguments', () => {
    apiData.getBookingData();
    expect(apiData.getBookingData).to.have.been.called.with();
  })

  it('should be able to call getUserData once', () => {
    apiData.getUserData();
    expect(apiData.getUserData).to.have.been.called(1);
  })

  it('should not call getUserData with any arguments', () => {
    apiData.getUserData();
    expect(apiData.getUserData).to.have.been.called.with();
  })

  it('should be able to call getRoomData once', () => {
    apiData.getRoomData();
    expect(apiData.getRoomData).to.have.been.called(1);
  })

  it('should not be able to call getRoomData with any arguments', () => {
    apiData.getRoomData();
    expect(apiData.getRoomData).to.have.been.called.with();
  })

  it('should be able to call postNewBooking once', () => {
    apiData.postNewBooking();
    expect(apiData.postNewBooking).to.have.been.called(1);
  })

  it('should be call postNewBooking with a formatted booking', () => {
    let booking = { userID: 1, date: "2020/11/29", roomNumber: 24 };
    apiData.postNewBooking(booking);
    expect(apiData.postNewBooking).to.have.been.called.with(booking);
  })
})
