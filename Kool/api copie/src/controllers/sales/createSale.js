import Joi from 'joi';
import HttpStatus from 'http-status-codes';
import mongoose from 'mongoose';

import Meal from '../../models/meal.model';
import Sale from '../../models/sale.model';

export async function createSale(req, res) {
    try {

        const body = {
            mealId: req.body.mealId,
            name: req.body.name,
            description: req.body.description,
            saleAmount: req.body.saleAmount,
            startDate: req.body.startDate,
            endDate: req.body.endDate,
        };
        const BodySchema = Joi.object({
            mealId: Joi.string().required(),
            name: Joi.string().required(),
            description: Joi.string().optional(),
            saleAmount: Joi.string().required(),
            startDate: Joi.date().optional(),
            endDate: Joi.date().optional(),
        });

        const { error } = BodySchema.validate(body);
        if (error && error.details) {
            return res.status(HttpStatus.BAD_REQUEST).json({ message: 'invalid_input_data' });
        }

        const meal = await Meal.findOne({
            _id: body.mealId
        })
        if(!meal){
            return res.status(HttpStatus.NOT_FOUND).json({ message: 'meal_not_found' });
        }
        const sale = await Sale.findOne({
            name: body.name
        });

        if (sale) {
            return res.status(HttpStatus.CONFLICT).json({ message: 'sale_already_exists' });
        }
        const saleId = new mongoose.Types.ObjectId();
        const newDate = new Date();



        const newSale = {
            _id: saleId,
            mealId: mongoose.Types.ObjectId(body.mealId),
            name: body.name,
            description: body.description,
            saleAmount: body.saleAmount,
            startDate: body.startDate,
            endDate: body.endDate,
            createdAt: newDate,
            updatedAt: newDate
        };


        await Sale.create(newSale);

        return res.status(HttpStatus.OK).json({
            sale: newSale
        });
    } catch (err) {
        return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ message: 'unknown_error_occurred' });
    }
}
