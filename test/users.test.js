import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../src/app';

chai.use(chaiHttp);

const baseUrl = '/api/user';

describe('Auth', () => {
  it('Should return the true', done => {
    chai
      .request(app)
      .get(`${baseUrl}/register`)
      .end((err, res) => {
        expect(res).to.have.status(200);
        done(err);
      });
  });
  it('should be true', () => {
    expect(true).to.equal(true);
  });
});
