import mongoose from 'mongoose';

const mealSupplementSchema = new mongoose.Schema({
    _id: mongoose.Schema.ObjectId,
    mealId: {
        type: mongoose.Schema.ObjectId,
        ref: 'Meal'
    },
    name: String,
    description: String,
    price: Number,
    coverPhoto: {
        type: mongoose.Schema.ObjectId,
        ref: 'File'
    },
    createdAt: Date,
    updatedAt: Date
}, { collection: 'mealSupplements', versionKey: false, _id : false });

const MealSupplement = mongoose.model('MealSupplement', mealSupplementSchema);

module.exports = MealSupplement;
