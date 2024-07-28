import express from 'express';

import {
    getAllServices,
    getServiceById
} from '../controllers/serviceController.js';

const postrouter = express.Router();
postrouter.get('/', getAllServices);
postrouter.get('/:id', getServiceById);

export default postrouter;