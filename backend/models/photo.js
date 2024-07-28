import db from '../config/database.js';
import { DataTypes, Model } from 'sequelize';


class Photo extends Model {}
Photo.init(
    {
        ID: {
            type: DataTypes.INTEGER,
            autoIncrement:true,
            primaryKey:true
        },
        image:{ type: DataTypes.STRING },
    },
    {
        sequelize: db,
        tableName: 'gallery',
        freezeTableName:true,
        modelName: 'Photo',
        timestamp:true,
    },
);

export default Photo;