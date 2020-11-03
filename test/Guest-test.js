import chai from 'chai';
const expect = chai.expect;
import Guest from '../src/Guest';

describe('Guest', () => {
  let guest1;

  beforeEach(() => {
    guest1 = new Guest();
  })


  it('should be a function', () => {
    expect(Guest).to.be.a('function');
  })

  it('should be an instance of Guest', () => {
    expect(guest1).to.be.an.instanceof(Guest);
  })
})
