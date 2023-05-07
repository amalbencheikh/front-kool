import mongoose from 'mongoose';

const mealSchema = new mongoose.Schema({
    _id: mongoose.Schema.ObjectId,
    menuId: {
        type: mongoose.Schema.ObjectId,
        ref: 'Menu'
    },
    name: String,
    description: String,
    price: String,
    coverPhoto: String,
    createdAt: Date,
    updatedAt: Date
}, { collection: 'meals', versionKey: false, _id : false });

const Meal = mongoose.model('Meal', mealSchema);

module.exports = Meal;
