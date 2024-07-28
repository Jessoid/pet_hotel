import db from '../config/database.js';
import { DataTypes, Model } from 'sequelize';
import User from './user.js';
import Service from './service.js';

class Reservation extends Model {}
Reservation.init(
    {
        ID:{
            type:DataTypes.INTEGER,
            autoIncrement:true,
            primaryKey:true,
        },
        userID:{type:DataTypes.INTEGER},
        inDate:{type:DataTypes.DATE},
        outDate:{type:DataTypes.DATE},
        animalType:{type:DataTypes.STRING},
        note:{type:DataTypes.STRING},
        status:{type:DataTypes.STRING},
        serviceID:{type:DataTypes.INTEGER},
    },
    {
        sequelize: db,
        tableName:'reservation',
        freezeTableName:true,
        modelName:'Reservation',
        timestamp:true,
    },
);

Reservation.belongsTo(User, {foreignKey: 'userID', as: 'user'});
User.hasMany(Reservation,{as:'reservation',foreignKey:'userID'});
Reservation.belongsTo(Service, {foreignKey:'serviceID', as:'service'});
Service.hasMany(Reservation, {as:'reservation', foreignKey:'serviceID'});

export default Reservation;