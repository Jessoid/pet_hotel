import Photo from '../models/photo.js';

export const getAllPhotos = async (req, res) => {
    try {
        const photos = await Photo.findAll({
            attributes: ['ID', 'image', 'createdAt', 'updatedAt', 'description'],
            order: [['updatedAt', 'DESC']]
        });
        res.json(photos);
    }catch (error) {
        res.json({message:error.message });
    }
};

export const getPhotoById = async (req, res) => {
    try {
        const photo = await Photo.findAll({
            attributes: ['ID','image', 'createdAt', 'updatedAt', 'description']
        });
        res.json(photo[0]);
    }catch (error) {
        res.json({message: error.message });
    }
};

export const addPhoto = async (req, res) => {
    try {
        await Photo.create(req.body);
        res.json({message: 'Photo Added'});
    }catch (error) {
        res.json({ message: error.message });
    }
};

export const updatePhoto = async (req, res ) => {
    try {
        await Photo.update(req.body, {
            where: {ID:req.params.ID },
        });
        res.json({message:'Photo Updated'});
    }catch (error) {
        res.json({message:error.message });
    }
};

export const deletePhoto = async (req, res) => {
    try {
        await Photo.destroy({
            where: { ID: req.params.ID },
        });
        res.json({message: 'Photo Deleted'});
    }catch (error) {
        res.json({ message:error.message});
    }
};

