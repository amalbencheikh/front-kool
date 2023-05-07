import Joi from 'joi';
import HttpStatus from 'http-status-codes';
import mongoose from 'mongoose';

import User from '../../models/user.model';

export async function changePassword(req, res) {
    try {
        const body = {
            oldPassword: req.body.oldPassword,
            newPassword: req.body.newPassword
        };

        const BodySchema = Joi.object({
            oldPassword: Joi.string()
                .min(8)
                .required(),
            newPassword: Joi.string()
                .min(8)
                .required()
        });

        const { error } = BodySchema.validate(body);
        if (error && error.details) {
            return res.status(HttpStatus.BAD_REQUEST).json({ message: 'invalid_input_data' });
        }

        const user = await User.findOne({
            _id: mongoose.Types.ObjectId(req.payload.uid)
        });

        if (!user.checkPassword(body.oldPassword)) {
            return res.status(HttpStatus.CONFLICT).json({ message: 'wrong_password' });
        }

        const newDate = new Date();
        user.account.password = body.newPassword;
        user.updatedAt = newDate;
        await user.save();

        return res.status(HttpStatus.OK).json({ success: true });
    } catch (err) {
        return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ message: 'unknown_error_occurred' });
    }
}
