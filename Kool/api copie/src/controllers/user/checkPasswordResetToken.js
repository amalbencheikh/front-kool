import Joi from 'joi';
import HttpStatus from 'http-status-codes';

import User from '../../models/user.model';

export async function checkPasswordResetToken(req, res) {
    try {
        const query = {
            resetToken: req.query.resetToken
        };

        const QuerySchema = Joi.object({
            resetToken: Joi.string()
                .required()
        });

        const { error } = QuerySchema.validate(query);
        if (error && error.details) {
            return res.status(HttpStatus.BAD_REQUEST).json({ message: 'invalid_input_data' });
        }

        const user = await User.findOne({
            'account.passwordResetToken': query.resetToken
        });

        if (!user) {
            return res.status(HttpStatus.CONFLICT).json({ message: 'unavailable_token' });
        }

        if (user.account.passwordResetExpires < new Date()) {
            return res.status(HttpStatus.CONFLICT).json({ message: 'expired_token' });
        }

        return res.status(HttpStatus.OK).json({ success: true });
    } catch (err) {
        return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ message: 'unknown_error_occurred' });
    }
}
