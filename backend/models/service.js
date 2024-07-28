import db from '../config/database.js';
import { DataTypes, Model } from 'sequelize';

class Service extends Model {}
Service.init(
    {
        ID: {
            type: DataTypes.INTEGER,
            primaryKey:true,
        },
        title: {type: DataTypes.STRING },
        description: { type:DataTypes.STRING },
        image: {type: DataTypes.STRING }
    },
    {
        sequelize: db,
        tableName: 'services',
        freezeTableName: true,
        modelName: 'service',
        timestamp: true,
    },
);

export default Service
