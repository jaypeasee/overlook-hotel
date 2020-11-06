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
      return availableRooms;
  }

  filterRoomsByType(allBookings, roomType) {
    const matchedRooms = this.retrieveAvailableRooms(allBookings);
    if (roomType === "all rooms") {
      return matchedRooms;
    }
    const roomsByType = matchedRooms.filter(room => {
      return room.roomType === roomType;
    })
    return roomsByType;
  }
}

export default Hotel;
