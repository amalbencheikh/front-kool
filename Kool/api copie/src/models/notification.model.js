import mongoose from 'mongoose';

const notificationSchema = new mongoose.Schema({
    _id: mongoose.Schema.ObjectId,
    recipientId: {
        type: mongoose.Schema.ObjectId,
        ref: 'User'
    },
    senderId: {
        type: mongoose.Schema.ObjectId,
        ref: 'User'
    },
    activityId: mongoose.Schema.ObjectId,
    activityKind: String,
    approvalStatus: String,
    isRead: Boolean,
    createdAt: Date,
    updatedAt: Date
}, { collection: 'notifications', versionKey: false, _id : false });

const Notification = mongoose.model('Notification', notificationSchema);

module.exports = Notification;
