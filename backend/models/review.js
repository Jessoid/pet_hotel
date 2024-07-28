import db from '../config/database.js';
import { DataTypes, Model } from 'sequelize';
import User from './user.js';
import Service from './service.js';

class Review extends Model {}

Review.init(
  {
    ID: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    userID: { type: DataTypes.INTEGER },
    text: { type: DataTypes.STRING },
    serviceID: { type: DataTypes.INTEGER },
    createdAt: { type: DataTypes.DATE }
  },
  {
    sequelize: db,
    tableName: 'reviews',
    freezeTableName: true,
    modelName: 'Review',
    timestamp: true,
  },
);

Review.belongsTo(User, { foreignKey: 'userID', as: 'user' });
User.hasMany(Review, { as: 'reviews', foreignKey: 'userID' });

Review.belongsTo(Service, { foreignKey: 'serviceID', as: 'service' });
Service.hasMany(Review, { as: 'reviews', foreignKey: 'serviceID' });

export default Review;
