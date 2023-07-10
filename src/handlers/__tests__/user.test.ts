import * as user from '../user';

describe('user handler', () => {
  it('should create a new user', async () => {
    const req = {
      body: { username: 'Ando', password: 'p/w' },
    };
    const res = {
      json({ token }) {
        console.log(token);
        expect(token).toBeTruthy();
      },
    };

    await user.createNewUser(req, res, () => {});
  });
});
