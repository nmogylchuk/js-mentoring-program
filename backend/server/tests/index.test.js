describe('Sample Test', () => {
  it('should test that true === true', () => {
    expect(true).toBe(true);
  });
});

const app = require('../index');
const supertest = require('supertest');
const request = supertest(app);

it('should get "Hello, World!"', async (done) => {
  const response = await request.get('/test');
  expect(response.status).toBe(200);
  expect(response.body.message).toBe('Hello, World!');
  done();
});
