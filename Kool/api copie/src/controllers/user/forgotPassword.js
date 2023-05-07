import Joi from 'joi';
import HttpStatus from 'http-status-codes';
import crypto from 'crypto';

import User from '../../models/user.model';

export async function forgotPassword(req, res) {
    try {
        const body = {
            email: req.body.email
        };

        const BodySchema = Joi.object({
            email: Joi.string()
                .email()
                .required()
        });

        const { error } = BodySchema.validate(body);
        if (error && error.details) {
            return res.status(HttpStatus.BAD_REQUEST).json({ message: 'invalid_input_data' });
        }

        const user = await User.findOne({
            email: body.email.toLowerCase()
        });

        if (!user) {
            return res.status(HttpStatus.CONFLICT).json({ message: 'email_not_found' });
        }

        if (user.account.activationStatus === 'SUSPENDED') {
            return res.status(HttpStatus.CONFLICT).json({ message: 'suspended_account' });
        }


        if (!user.account.isVerified) {
            return res.status(HttpStatus.CONFLICT).json({ message: 'unverified_account' });
        }

        const newDate = new Date();
        const expiredDate = new Date(newDate);
        const resetToken = crypto.randomBytes(32).toString('hex');
        user.account.passwordResetToken = resetToken;
        user.account.passwordResetExpires = expiredDate.setMinutes(newDate.getMinutes() + 15);
        user.updatedAt = new Date();
        await user.save();

        // send email


        return res.status(HttpStatus.OK).json({ success: true });
    } catch (err) {
        return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ message: 'unknown_error_occurred' });
    }
}
