import Sequelize, { Model } from 'sequelize';

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        position: Sequelize.STRING,
      },
      {
        sequelize,
      },
    );
  }
}

export default User;
