import express from 'express';
import { checkAuth } from '../validations/checkAuth.js';

import {
    getAllReviews,
    createReview,
    updateReview,
    deleteReview,
} from '../controllers/reviewController.js';

const reviewrouter = express.Router();

reviewrouter.get('/', getAllReviews);
reviewrouter.post('/', createReview);

reviewrouter.get('/:id', checkAuth, updateReview);
reviewrouter.delete('/:id', checkAuth, deleteReview);

export default reviewrouter;