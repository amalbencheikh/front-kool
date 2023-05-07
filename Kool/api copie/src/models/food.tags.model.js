import mongoose from 'mongoose';

const foodTagSchema = new mongoose.Schema({
    _id: mongoose.Schema.ObjectId,
    name: String,
    coverPhoto: {
        type: mongoose.Schema.ObjectId,
        ref: 'File'
    },
    createdAt: Date,
    updatedAt: Date
}, { collection: 'foodTags', versionKey: false, _id : false });

const FoodTag = mongoose.model('FoodTag', foodTagSchema);

module.exports = FoodTag;
