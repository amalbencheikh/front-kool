import Joi from 'joi';
import HttpStatus from 'http-status-codes';

import User from '../../models/user.model';

export async function verifyAccount(req, res) {
    try {
        // inputs
        const body = {
            verifyToken: req.body.verifyToken
        };

        const BodySchema = Joi.object({
            verifyToken: Joi.string()
                .required()
        });

        const { error } = BodySchema.validate(body);
        if (error && error.details) {
            return res.status(HttpStatus.BAD_REQUEST).json({ message: 'invalid_input_data' });
        }

        const user = await User.findOne({
            'account.verifyToken': body.verifyToken
        });

        if (!user) {
            return res.status(HttpStatus.CONFLICT).json({ message: 'unavailable_token' });
        }

        if (user.account.isVerified) {
            return res.status(HttpStatus.CONFLICT).json({ message: 'user_already_verified' });
        }

        // update password
        user.account.isVerified = true;
        user.account.verifyToken = undefined;
        user.updatedAt = new Date();
        await user.save();

        return res.status(HttpStatus.OK).json({ success: true });
    } catch (err) {
        return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ message: 'unknown_error_occurred' });
    }
}
