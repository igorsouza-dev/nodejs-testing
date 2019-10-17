import request from 'supertest';
import app from '../../src/app';

describe('User', () => {
  it('should be able to register', async () => {
    const response = await request(app)
      .post('/users')
      .send({
        name: 'Igor Martins',
        email: 'igorsouza.dev@gmail.com',
        password_hash: '123456',
      });
    console.log(response);
    expect(response.body).toHaveProperty('id');
  });
});
