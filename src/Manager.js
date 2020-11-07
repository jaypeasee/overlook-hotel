import User from './User';
import Guest from './Guest';

class Manager extends User {
  constructor(username) {
    super(username)
  }

  searchForGuest(guestName, allGuests) {
    const searchedGuest = allGuests.find(guest => {
      return guestName === guest.name;
    })
    if (searchedGuest) {
      const guestProfile = new Guest(`customer${searchedGuest.id}`, searchedGuest.name);
      guestProfile.id = searchedGuest.id;
      return guestProfile;
    }
    return "error";
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
