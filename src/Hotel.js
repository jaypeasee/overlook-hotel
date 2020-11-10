import moment from 'moment';

class Hotel {
  constructor(rooms) {
    this.rooms = rooms;
    this.date = moment().format("YYYY/MM/DD");
  }

  retrieveAvailableRooms(allBookings) {
    const takenRoomNumbers = allBookings.reduce((roomNumbers, booking) => {
      if (booking.date === this.date) {
        roomNumbers.push(booking.roomNumber);
      }
      return roomNumbers;
    }, [])
    const availableRooms = this.rooms.filter(room => {
      return !takenRoomNumbers.includes(room.number);
    })
    return availableRooms;
  }

  filterRoomsByType(allBookings, roomType) {
    const matchedRooms = this.retrieveAvailableRooms(allBookings);
    if (roomType === 'all rooms') {
      return matchedRooms;
    }
    const roomsByType = matchedRooms.filter(room => {
      return room.roomType === roomType;
    })
    return roomsByType;
  }
}

export default Hotel;
