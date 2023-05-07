import Joi from 'joi';
import HttpStatus from 'http-status-codes';
import mongoose from 'mongoose';
import * as mongodb from 'mongodb';

import User from '../../models/user.model';

export async function setUserActivationStatus(req, res) {
    try {

        const body = {
            userId: req.body.userId,
            activationStatus: req.body.activationStatus
        };

        const BodySchema = Joi.object({
            userId: Joi.string()
                .required(),
            activationStatus: Joi.string()
                .valid('ACTIVE', 'INACTIVE', 'SUSPENDED')
                .required()
        });

        const { error } = BodySchema.validate(body);
        if (error && error.details) {
            return res.status(HttpStatus.BAD_REQUEST).json({ message: 'invalid_input_data' });
        }

        if (!mongodb.ObjectID.isValid(body.userId)) {
            return res.status(HttpStatus.BAD_REQUEST).json({ message: 'invalid_input_data' });
        }


        const user = await User.findOne({
            _id: mongoose.Types.ObjectId(body.userId)
        });

        if (!user) {
            return res.status(HttpStatus.CONFLICT).json({ message: 'user_not_found' });
        }



        if (user.account.activationStatus === body.activationStatus) {
            return res.status(HttpStatus.CONFLICT).json({ message: 'status_already_updated' });
        }

        user.account.activationStatus = body.activationStatus;
        user.account.isActiveAt = body.activationStatus === 'SUSPENDED' ? new Date(new Date().setMonth(new Date().getMonth()+1)) : null;
        user.updatedAt = new Date();
        await user.save();



        return res.status(HttpStatus.OK).json({
            user: user
        });
    } catch (err) {
        return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ message: 'unknown_error_occurred' });
    }
}
