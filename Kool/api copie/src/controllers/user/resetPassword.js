import Joi from 'joi';
import HttpStatus from 'http-status-codes';

import User from '../../models/user.model';

export async function resetPassword(req, res) {
    try {
        const body = {
            resetToken: req.body.resetToken,
            newPassword: req.body.newPassword
        };

        const BodySchema = Joi.object({
            resetToken: Joi.string()
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
            'account.passwordResetToken': body.resetToken,
            'account.passwordResetExpires': {
                $gt: new Date()
            }
        });

        if (!user) {
            return res.status(HttpStatus.CONFLICT).json({ message: 'unavailable_token' });
        }

        // set password
        const newDate = new Date();
        user.account.password = body.newPassword;
        user.account.passwordResetAt = newDate;
        user.account.passwordResetToken = undefined;
        user.account.passwordResetExpires = undefined;
        user.updatedAt = new Date();
        await user.save();

        return res.status(HttpStatus.OK).json({ success: true });
    } catch (err) {
        return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ message: 'unknown_error_occurred' });
    }
}
