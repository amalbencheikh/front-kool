import jwt from 'jsonwebtoken';
import HttpStatus from 'http-status-codes';
import mongoose from 'mongoose';

import User from '../models/user.model';
import config from '../config/config';

export function signAccessToken(user) {
    return jwt.sign({
        uid: user.id,
    }, config.ACCESS_TOKEN_SECRET, { expiresIn: config.ACCESS_TOKEN_EXPIRES_IN });
}

export async function verifyAccessToken(req, res, next) {
    if (!req.headers.authorization || !req.headers.authorization.startsWith('Bearer')) {
        return res.status(HttpStatus.UNAUTHORIZED).json({ message: 'required_authorization' });
    }

    const token = req.headers.authorization.split(' ')[1];
    if (!token) {
        return res.status(HttpStatus.UNAUTHORIZED).json({ message: 'required_token' });
    }

    return jwt.verify(token, config.ACCESS_TOKEN_SECRET, async (err, payload) => {
        if (err) {
            if (err.expiredAt < new Date()) {
                return res.status(HttpStatus.FORBIDDEN).json({ message: 'expired_token' });
            }
            next();
        }

        const user = await User.findOne({
            _id: mongoose.Types.ObjectId(payload.uid)
        });

        if (!user) {
            return res.status(HttpStatus.FORBIDDEN).json({ message: 'access_denied' });
        }

        // check if token not revoked
        if (new Date(payload.iat * 1000) < user.account.passwordResetAt || new Date(payload.iat * 1000) < user.lastSignOut) {
            return res.status(HttpStatus.FORBIDDEN).json({ message: 'revoked_token' });
        }

        req.payload = payload;
        next();
    });
}
