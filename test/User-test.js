import chai from 'chai';
const expect = chai.expect;
import User from '../src/User';
import moment from 'moment';

describe('User', () => {
  let user1;
  let user2;
  let user3;

  beforeEach(() => {
    user1 = new User("customer1");
    user2 = new User("customer2");
    user3 = new User("manager")
  })

  it('should be a function', () => {
    expect(User).to.be.a('function');
  })

  it('should be an  instance of User', () => {
    expect(user1).to.be.an.instanceof(User);
  })

  it('should have the same password for all users', () => {
    expect(user1.password).to.equal("overlook2020");
    expect(user2.password).to.equal("overlook2020");
  })

  it('should have a username', () => {
    expect(user1.username).to.equal("customer1");
  })

  it('should be able to have a different username', () => {
    expect(user2.username).to.equal("customer2");
  })

  it('should be able to have a manager username', () => {
    expect(user3.username).to.equal("manager");
  })

  it('should have an id based on the username', () => {
    expect(user1.id).to.equal(1);
  })

  it('should have a different id based on the username', () => {
    expect(user2.id).to.equal(2);
  })

  it('should have an id of 0 if it is the manager', () => {
    expect(user3.id).to.equal(0);
  })

  it('should have today\'s date', () => {
    expect(user1.date).to.equal(moment().format('YYYY-MM-DD'));
  })

  it('should determine if it\'s user type is a manager', () => {
    expect(user3.validateUser("overlook2020")).to.equal("manager")
  })

  it('should determine if it\'s user type is a guest', () => {
    expect(user1.validateUser("overlook2020")).to.equal("guest")
  })

  it('should invalidate the user if it\s password is incorrect', () => {
    expect(user1.validateUser("I solemnly swear that I am up to no good")).to.equal("Please enter a valid username and password.")
  })

  it('should invalidate the user if it\s id is greater than 50', () => {
    const user4 = new User("customer51")
    expect(user4.validateUser("overlook2020")).to.equal("Please enter a valid username and password.");
  })

  it('should invalidate the user if it\'s username does not contain "manager" or "customer"', () => {
    const user4 = new User("custoomer1")
    expect(user4.validateUser("overlook2020")).to.equal("Please enter a valid username and password.");
  })
})
