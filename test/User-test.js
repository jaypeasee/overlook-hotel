import chai from 'chai';
const expect = chai.expect;
import User from '../src/User';

describe('User', () => {
  let user1 = new User();

  beforeEach(() => {
    user1 = new User();
  })

  it('should be a function', () => {
    expect(User).to.be.a('function');
  })

  it('should be an  instance of User', () => {
    expect(user1).to.be.an.instanceof(User);
  })
})
