export let apiCalls = {
  getBookingData() {
    return fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings')
      .then(response => response.json())
      .then(data => data.bookings)
      .catch(error => console.log(error.message));
  },

  getUserData() {
    return fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/users/users')
      .then(response => response.json())
      .then(data => data.users)
      .catch(error => console.log(error.message));
  },

  getRoomData() {
    return fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/rooms/rooms')
      .then(response => response.json())
      .then(data => data.rooms)
      .catch(error => console.log(error.message));
  },

  postNewBooking(bookingToPost) {
    return fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings', {
      method: 'POST',
      headers: {
  	        'Content-Type': 'application/json'
      },
      body: JSON.stringify(bookingToPost),
    })
    .then(response => response.json())
    .catch(error => console.log(error.message))
  },

  deleteBooking(bookingToDelete) {
    return fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings', {
      method: 'DELETE',
      headers: {
  	        'Content-Type': 'application/json'
      },
      body: JSON.stringify(bookingToDelete)
    })
    .then(response => response.json())
    .catch(error => console.log(error.message))
  }
}
