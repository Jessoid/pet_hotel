import express from 'express';
import { checkAuth } from '../validations/checkAuth.js';

import {
    getAllPhotos,
    getPhotoById,
    addPhoto,
    updatePhoto,
    deletePhoto,
} from '../controllers/photoController.js';

const postrouter = express.Router();

//for all users
postrouter.get('/', getAllPhotos);
postrouter.get('/:ID', getPhotoById);

//for moderator
postrouter.post('/', checkAuth, addPhoto);
postrouter.patch('/:ID', checkAuth, updatePhoto);
postrouter.delete('/:ID', checkAuth, deletePhoto);

export default postrouter;