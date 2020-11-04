import User from './User';
import Guest from './Guest';

class Manager extends User {
  constructor(username) {
    super(username)
  }

  userSearch(guestName, allGuests) {
    const searchedGuest = allGuests.find(guest => {
      return guestName === guest.name;
    })
    if (searchedGuest) {
      return searchedGuest;
    }
    return `No customers have been found under the name of '${guestName}'.`;
  }

  filterTodaysBookings(allBookings) {
    return allBookings.filter(booking => {
      return booking.date === this.date;
    })
  }

  calculateOccupancyToday(allBookings, totalNumberOfRooms) {
    const bookedRooms = this.filterTodaysBookings(allBookings);
    const percentOccupancy = Math.round(bookedRooms.length / totalNumberOfRooms * 100);
    return `${percentOccupancy}%`;
  }

  calculateRevenueToday(allBookings, hotel) {
    const bookedRooms = this.filterTodaysBookings(allBookings);
    const totalRevenue = hotel.rooms.reduce((acc, room) => {
      bookedRooms.forEach(booking => {
        if (room.number === booking.roomNumber) {
          acc += room.costPerNight;
        }
      })
      return acc
    }, 0)
    return totalRevenue;
  }
}

export default Manager;
