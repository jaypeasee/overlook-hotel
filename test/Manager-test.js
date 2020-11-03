import chai from 'chai';
const expect = chai.expect;
import Manager from '../src/Manager';

describe('Manager', () => {
  let manager;

  beforeEach(() => {
    manager = new Manager("manager");
  })

  it('should be a function', () => {
    expect(Manager).to.be.a('function');
  })

  it('should be an instance of Manager', () => {
    expect(manager).to.be.an.instanceof(Manager);
  })
})
