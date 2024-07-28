import express from 'express';
// import jwt from 'jsonwebtoken';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import db from './config/database.js';
import userRoute from './routes/userRoute.js';
import serviceRoute from './routes/serviceRoute.js';
import photoRoute from './routes/photoRoute.js';
import reviewRoute from './routes/reviewRoute.js';
import reservationRoute from './routes/reservationRoute.js';

const app = express();

//подключение к бд
try {
    await db.authenticate();
    console.log('Database connected...');
}catch (error) {
    console.error('Connection error:', error);
}

app.use(cors({ credentials: true, origin: 'http://localhost:3000'}));
app.use(cookieParser());
app.use(express.json());

app.use('/users', userRoute);
app.use('/services', serviceRoute);
app.use('/photos', photoRoute);
app.use('/reviews', reviewRoute);
app.use('/reservations', reservationRoute);

app.listen(5000, (err) => {
    if (err) {
        return console.log(err);
    }
    console.log('Server OK, port 5000');
});