import moment from 'moment';

class User {
  constructor(username) {
    this.username = username;
    this.password = 'overlook2020';
    this.id = username.includes('customer') ? parseInt(username.slice(8)) : 0
    this.date = moment().format('YYYY-MM-DD');
  }

  validateUser(enteredPW) {
    if (this.username === 'manager' && enteredPW === this.password) {
      return 'manager';
    } else if (this.username.includes('customer') && this.id < 51 && enteredPW === this.password) {
      return 'guest';
    } else {
      return 'Please enter a valid username and password.';
    }
  }
}

export default User;
