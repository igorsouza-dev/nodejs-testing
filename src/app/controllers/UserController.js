import User from '../models/User';

class UserController {
  async store(req, res) {
    // const user = await User.create(req.body);
    const user = await User.create({
      name: 'Igor',
      email: 'igor@gmail.com',
      password_hash: 'sdfsdf',
    });
    return res.json(user);
  }
}

export default new UserController();
