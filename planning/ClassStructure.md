# Class Structure

## User Class (parent)

#### Properties:

1. `Username` = whatever the user passes in
   * customer${id} or manager
2. `Password` = overlook2020
3. `Date` - new Date()

##### Method:

1. `retrieveAvailableRooms`
   * takes in a date, iterates through booked rooms by that date (filter)
   * iterates through filtered array (forEach?).
     * iterates through all rooms array (filter). if room number !== room number return it

#### Customer Class (child)

##### Properties:

1. `name` from the user API
2. `id` from the user API
3. `pastBookings` starts out []
4. `presentBookings` starts out []
5. `upcomingBookings` starts out []
6. `totalSpent` starts out 0

##### Methods:

1. `calculateTotalSpent` - The total amount I have spent on rooms
2. `accessBookings` 
   * iterate through bookings array (forEach)
   * match id in array to user id
   * create conditions about todays vs dates in array
   * push accordingly
3. `sortBookings` - past or present

#### Manager Class (child):

##### Methods:

1. `searchUser` - by name. should return name, their bookings (past, present, and future), & total amount spent
   * Take in a string (full name)
   * iterate through users (find) name === name entered
   * Return object
2. `calculateOccupancy`
   * Iterate through booked rooms api (filter). return objects whos dates match today's date.
   * subtract total length of all rooms - length of new array.
   * divide that value from lenfth of the total length of all rooms.
3. `calculateTotalRevenue` 
   * takes in a date
   * iterates through booked array (filter) to date
   * iterates through filtered array (reduce) acc 0
   * add cost each day

### Hotel Class

##### Properties:

1. `rooms` (array of room objects)

   * Format of an instance potentially:

    `{"number":1,"roomType":"residential  suite","bidet":true,"bedSize":"queen","numBeds":1,"costPerNight":358.4}`

   * Would it be beneficial to only have available rooms? How would I do that?
   * [All Rooms API](https://fe-apps.herokuapp.com/api/v1/overlook/1904/users/users)
   * [All Bookings API](https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings)

##### Methods:

1. `filterRoomType`
   * invokes `showAvailableRooms`, iterates through that array and filters based on room type

