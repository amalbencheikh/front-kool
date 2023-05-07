import HttpStatus from 'http-status-codes';
import mongoose from 'mongoose';

import User from '../../models/user.model';

export async function signOut(req, res) {
    try {
        const user = await User.findOne({
            _id: mongoose.Types.ObjectId(req.payload.uid)
        });

        const newDate = new Date();
        user.lastSignOut = newDate;
        await user.save();

        res.cookie('token', '', { expires: newDate });

        return res.status(HttpStatus.OK).json({ success: true });
    } catch (err) {
        return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ message: 'unknown_error_occurred' });
    }
}
