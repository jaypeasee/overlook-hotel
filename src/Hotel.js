class Hotel {
  constructor(rooms) {
    this.rooms = rooms;
    this.date = undefined;
  }

  retrieveAvailableRooms(allBookings) {
    const takenRoomNumbers = allBookings.reduce((acc, booking) => {
      if (booking.date === this.date) {
        acc.push(booking.roomNumber);
      }
      return acc;
    }, [])
    const availableRooms = this.rooms.filter(room => {
      return !takenRoomNumbers.includes(room.number);
    })
    if (availableRooms.length > 0) {
      return availableRooms;
    }
  }

  filterRoomsByType(allBookings, roomType) {
    const matchedRooms = this.retrieveAvailableRooms(allBookings);
    const roomsByType = matchedRooms.filter(room => {
      return room.roomType === roomType;
    })
    return roomsByType;
  }
}

export default Hotel;
