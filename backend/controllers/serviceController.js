import Service from "../models/service.js";

export const getAllServices = async (req, res) => {
    try {
        const services = await Service.findAll({
            attributes: ['ID', 'title', 'description', 'price', 'image'],
            order: [['ID', 'ASC']]
        });
        res.json(services);
    } catch (error) {
        res.json({ message: error.message });
    }
};

export const getServiceById = async (req, res) => {
    try {
        const service = await Service.findByPk(req.params.id, {
            attributes: ['ID', 'title', 'description', 'price', 'image']
        });
        res.json(service);
    } catch (error) {
        res.json({ message: error.message });
    }
};


