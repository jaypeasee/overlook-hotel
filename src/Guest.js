import User from './User'

class Guest extends User {
  constructor(username, name) {
    super(username);
    this.name = name;
    this.presentBookings = [];
    this.futureBookings = [];
    this.pastBookings = [];
    this.totalAmountSpent = 0;
  }

  findBookingRecords(allBookings) {
    return allBookings.filter(booking => {
      return booking.userID === this.id;
    })
  }

  calculateTotalSpent(allBookings, hotel) {
    const guestHistory = this.findBookingRecords(allBookings);
    hotel.rooms.forEach(room => {
      guestHistory.forEach(booking => {
        if (booking.roomNumber === room.number) {
          this.totalAmountSpent += room.costPerNight;
        }
      })
      this.totalAmountSpent = Math.round(this.totalAmountSpent * 100) / 100;
    })
  }

  retrieveAllBookings(allBookings) {
    const guestHistory = this.findBookingRecords(allBookings)
    guestHistory.forEach(booking => {
      if (booking.date === this.date) {
        this.presentBookings.push(booking);
      } else if (Date.parse(booking.date) > Date.parse(this.date)) {
        this.futureBookings.push(booking);
      } else {
        this.pastBookings.push(booking);
      }
    })
  }

  sortBookingsByDate(timePeriod) {
    if (this.futureBookings.length > 0 && timePeriod === "future") {
      const sortedFuture = this.futureBookings.sort((futureA, futureB) => {
        return futureA.date > futureB.date ? 1 : -1
      })
    } else if (this.pastBookings.length > 0 && timePeriod === "past") {
      const sortedPast = this.pastBookings.sort((pastA, pastB) => {
        return pastA.date < pastB.date ? 1 : -1;
      })
    }
  }
}

export default Guest;
