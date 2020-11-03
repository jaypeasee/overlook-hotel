class Hotel {
  constructor(rooms) {
    this.rooms = rooms;
  }

  retrieveAvailableRooms(takenRoomNumbers) {
    const availableRooms = this.rooms.filter(room => {
      return !takenRoomNumbers.includes(room.number);
    })
    if (availableRooms.length > 0) {
      return availableRooms;
    }
  }

  filterRoomsByType(roomNumbers, roomType) {
    const matchedRooms = this.retrieveAvailableRooms(roomNumbers);
    const roomsByType = matchedRooms.filter(room => {
      return room.roomType === roomType;
    })
    return roomsByType;
  }
}

export default Hotel;
