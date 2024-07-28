import Review from "../models/review.js";

export const getAllReviews = async (req, res) => {
    try{
        const reviews = await Review.findAll({
            include:['user', 'service'],
            where:{},
            order:[['createdAt','DESC']],
        });
        res.json(reviews);
    }catch (error) {
        res.json({message:error.message});
    }
};

export const createReview = async (req, res) => {
    try {
        const { userID,serviceId, ...reviewData } = req.body; // Извлекаем userID из запроса
        const createdReview = await Review.create({ ...reviewData, userID, serviceID:serviceId});

        res.json({
            message: 'Reservation Created!',
            review: createdReview, // Отправляем созданную резервацию в ответе
        });
    }catch (error) {
        res.json({message:error.message});
    }
};

export const updateReview = async (req, res ) => {
    try {
        await Review.update(req.body, {
            where: {ID:req.params.ID },
        });
        res.json({message:'Review Updated'});
    }catch (error) {
        res.json({message:error.message });
    }
};

export const deleteReview = async (req, res) => {
    try {
        await Review.destroy({
            where: { ID: req.params.ID },
        });
        res.json({message: 'Review Deleted'});
    }catch (error) {
        res.json({ message:error.message});
    }
};
