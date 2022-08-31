const request = require('supertest');
const app = require('../app');

describe('GET /', () => {
  it('responds with message', (done) => {
    const response = request(app).get('/');
    response.expect(200, { message: 'Hello, ODevs' }, done);
  });
});