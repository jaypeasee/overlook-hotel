import User from './User'

class Guest extends User {
  constructor(username) {
    super(username)
  }
}

export default Guest;
