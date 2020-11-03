class User {
  constructor(username) {
    this.username = username;
    this.password = "overlook2020";
    this.id = username.includes('customer') ? parseInt(username.slice(8)) : 0
    this.date = new Date().toISOString().split('T')[0]
  }
}

export default User;
