import chai from 'chai';
const expect = chai.expect;
import Manager from '../src/Manager';
import Guest from '../src/Guest';

describe('Manager', () => {
  let manager;
  let guest1;
  let guest2;
  let guest3;

  beforeEach(() => {
    manager = new Manager("manager");
    guest1 = new Guest("customer1");
    guest2 = new Guest("customer2");
    guest3 = new Guest("customer3");
  })

  it('should be a function', () => {
    expect(Manager).to.be.a('function');
  })

  it('should be an instance of Manager', () => {
    expect(manager).to.be.an.instanceof(Manager);
  })

  it('should be able to search for a customer', () => {

  })
})
