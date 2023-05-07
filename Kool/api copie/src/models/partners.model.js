import mongoose from 'mongoose';

const partnerSchema = new mongoose.Schema({
    _id: mongoose.Schema.ObjectId,
    restaurantId: {
        type: mongoose.Schema.ObjectId,
        ref: 'Restaurant'
    },
    name: String,
    coverPhoto: {
        type: mongoose.Schema.ObjectId,
        ref: 'File'
    },
    createdAt: Date,
    updatedAt: Date
}, { collection: 'partners', versionKey: false, _id : false });

const Partner = mongoose.model('Partner', partnerSchema);

module.exports = Partner;
