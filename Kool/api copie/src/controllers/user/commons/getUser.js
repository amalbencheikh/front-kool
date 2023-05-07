import Joi from 'joi';
import HttpStatus from 'http-status-codes';
import * as mongodb from 'mongodb';
import { getUserById } from './getUserById';

export async function getUser(req, res) {
    try {

        const query = {
            userId: req.query.userId
        };

        const schema = Joi.object({
            userId: Joi.string()
                .required()
        });

        const { error } = schema.validate(query);
        if (error && error.details) {
            return res.status(HttpStatus.BAD_REQUEST).json({ message: 'invalid_input_data' });
        }

        if (!mongodb.ObjectID.isValid(query.userId)) {
            return res.status(HttpStatus.BAD_REQUEST).json({ message: 'invalid_input_data' });
        }

        const user = await getUserById(query.userId);
        if (user === null) {
            return res.status(HttpStatus.CONFLICT).json({ message: 'user_not_found' });
        }

        return res.status(HttpStatus.OK).json({
            id: user.id,
            email: user.email,
            account: user.account,
            profile: user.profile,
            contact: user.contact,
            settings: user.settings,
            lastSignIn: user.lastSignIn,
            createdAt: user.createdAt
        });
    } catch (err) {
        return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ message: 'unknown_error_occurred' });
    }
}
