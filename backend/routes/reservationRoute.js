import express from 'express';
import { checkAuth } from '../validations/checkAuth.js';

import {
    getAllReservations,
    createReservation,
    updateReservation,
    deleteReservation,
} from '../controllers/reservationController.js';

const reservationrouter = express.Router();

reservationrouter.get('/', getAllReservations);
reservationrouter.post('/', createReservation);
reservationrouter.get('/:id', checkAuth, updateReservation);
reservationrouter.delete('/:id', checkAuth, deleteReservation);

export default reservationrouter;