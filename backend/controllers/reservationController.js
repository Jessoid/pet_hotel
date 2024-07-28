import Reservation from '../models/reservation.js';
import Users from '../models/user.js';

export const getAllReservations = async (req, res) => {
    try{
        const reservations = await Reservation.findAll({
            include:['user', 'service'],
            where:{},
            order:[['createdAt', 'DESC']]
        });
        res.json(reservations);
    }catch (error) {
        res.json({message:error.message});
    }
};

export const getReservationById = async (req, res) => {
    try {
        const reservation = await Reservation.findByPk(req.params.id, {
            attributes:['ID', 'userID', 'inDate', 'outDate', 'animalType', 'status', 'serviceID', 'note']
        });
        res.json(reservation);
    }catch (error){
        res.json({message:error.message});
    }
};

export const createReservation = async (req,res) => {
    try {

        const { userID,serviceId, ...reservationData } = req.body; // Извлекаем userID из запроса
        const createdReservation = await Reservation.create({ ...reservationData, userID, serviceID:serviceId});

        res.json({
            message: 'Reservation Created!',
            reservation: createdReservation, // Отправляем созданную резервацию в ответе
        });

        // res.json({message:'Reservation Created!'});
    }catch (error) {
        res.json({message:error.message});
    }
};

export const updateReservation = async (req, res ) => {
    try {
        await Reservation.update(req.body, {
            where: {ID:req.params.ID },
        });
        res.json({message:'Reservation Updated'});
    }catch (error) {
        res.json({message:error.message });
    }
};

export const deleteReservation = async (req, res) => {
    try {
        await Reservation.destroy({
            where: { ID: req.params.ID },
        });
        res.json({message: 'Reservation Deleted'});
    }catch (error) {
        res.json({ message:error.message});
    }
};