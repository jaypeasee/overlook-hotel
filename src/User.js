class User {
  constructor(username) {
    this.username = username;
    this.password = "overlook2020";
    this.id = username.includes('customer') ? parseInt(username.slice(8)) : 0
    this.date = new Date().toISOString().split('T')[0]
  }

  validateUser(enteredPW) {
    if (this.username === "manager" && enteredPW === this.password) {
      return "manager";
    } else if (this.username.includes("customer") && this.id < 50 && enteredPW === this.password) {
      return "guest";
    } else {
      return "Please enter a valid username and password.";
    }
  }
}

export default User;
