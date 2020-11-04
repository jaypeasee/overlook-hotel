class Hotel {
  constructor(rooms) {
    this.rooms = rooms;
  }

// need to clean this up and find the taken rooms here instead of in scripts
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
