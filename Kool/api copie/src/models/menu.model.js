import mongoose from 'mongoose';

const menuSchema = new mongoose.Schema({
    _id: mongoose.Schema.ObjectId,
    restaurantId: {
        type: mongoose.Schema.ObjectId,
        ref: 'Restaurant'
    },
    name: String,
    coverPhoto: String,
    createdAt: Date,
    updatedAt: Date
}, { collection: 'menus', versionKey: false, _id : false });

const Menu = mongoose.model('Menu', menuSchema);

module.exports = Menu;
