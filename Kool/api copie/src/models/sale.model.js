import mongoose from 'mongoose';

const saleSchema = new mongoose.Schema({
    _id: mongoose.Schema.ObjectId,
    mealId: {
        type: mongoose.Schema.ObjectId,
        ref: 'Meal'
    },
    name: String,
    description: String,
    saleAmount: String,
    startDate: Date,
    endDate: Date,
    createdAt: Date,
    updatedAt: Date
}, { collection: 'sales', versionKey: false, _id : false });

const Sale = mongoose.model('Sale', saleSchema);

module.exports = Sale;
