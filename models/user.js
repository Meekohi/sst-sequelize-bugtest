import { Model, DataTypes } from 'sequelize';

export default (sequelize) => {
  class User extends Model {
  }
  User.init({
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true
      },
      unique: true,
    },
    hashedPassword: {
      type: DataTypes.STRING,
      allowNull: false
    },
    passwordResetToken: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    sequelize,
    modelName: 'user',
    defaultScope: {
      attributes: { exclude: ['hashedPassword', 'passwordResetToken'] },
    }
  });
  return User;
};
