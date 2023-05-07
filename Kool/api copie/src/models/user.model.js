import mongoose from 'mongoose';
import { hashSync, compareSync } from 'bcryptjs';

const userSchema = new mongoose.Schema({
    _id: mongoose.Schema.ObjectId,
    email: String,
    account: {
        isDelivery: Boolean,
        isVerified: Boolean,
        notificationToken: String,
        verifyToken: String,
        verifyMessageCode:String,
        password: String,
        passwordResetAt: Date,
        passwordResetToken: String,
        passwordResetExpires: Date,
        activationStatus: String,
        isActiveAt: Date
    },
    profile: {
        fullName: String,
        address: String,
        gps: {
            latitude: String,
            longitude: String,
        },
        koolID: String,
    },
    contact: {
        phone: {
            countryCode: Number,
            number: String
        }
    },
    settings: {
        language: String,
        isNotified: Boolean
    },
    lastSignIn: Date,
    lastSignOut: Date,
    createdAt: Date,
    updatedAt: Date,
    deviceId: String
}, { collection: 'users', versionKey: false, _id : false });

userSchema.pre('save', function(next) {
    if (this.isModified('account.password')) {
        this.account.password = this.hashPassword(this.account.password);
        return next();
    }

    return next();
});

userSchema.methods = {
    hashPassword(password) {
        return hashSync(password);
    },
    checkPassword(password) {
        return compareSync(password, this.account.password);
    },
};

const User = mongoose.model('User', userSchema);

module.exports = User;
