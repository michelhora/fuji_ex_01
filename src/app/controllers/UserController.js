import User from '../models/User';

class UserController {
  async store(req, res) {
    const { id, name, position } = await User.create(req.body);

    return res.json({
      id,
      name,
      position,
    });
  }

  async index(req, res) {
    const users = await User.findAll();
    return res.json({
      users,
    });
  }

  async update(req, res) {
    const user = await User.findByPk(req.body.id);

    const { id, name, position } = await user.update(req.body);

    return res.json({
      id,
      name,
      position,
    });
  }
}

export default new UserController();
