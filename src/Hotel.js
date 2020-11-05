class Hotel {
  constructor(rooms) {
    this.rooms = rooms;
  }

  retrieveAvailableRooms(datePicked, allBookings) {
    console.log(datePicked);
    const takenRoomNumbers = allBookings.reduce((acc, booking) => {
      if (booking.date === datePicked) {
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

  filterRoomsByType(datePicked, allBookings, roomType) {
    const matchedRooms = this.retrieveAvailableRooms(datePicked, allBookings);
    const roomsByType = matchedRooms.filter(room => {
      return room.roomType === roomType;
    })
    return roomsByType;
  }
}

export default Hotel;
