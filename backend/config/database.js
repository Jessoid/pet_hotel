import { Sequelize } from "sequelize";

const db = new Sequelize ('pet_hotel', 'root', '', {
    host:'localhost',
    dialect:'mysql',
});

export default db;