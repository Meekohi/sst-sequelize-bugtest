import userModel from './user.js';

export default (sequelize) => {
  const Models = {
    User: userModel(sequelize),
  }

  for(const model in Models) {
    Models[model].associate(Models)
  }
  
  return Models
}
