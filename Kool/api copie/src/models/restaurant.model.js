import mongoose from 'mongoose';

const restaurantSchema = new mongoose.Schema(
	{
		_id: mongoose.Schema.ObjectId,
		managerId: {
			type: mongoose.Schema.ObjectId,
			ref: 'User'
		},
		name: String,
		address: String,
		gps: {
			latitude: String,
			longitude: String,
		},
		deliveryFee: Number,
		// reviews: {
		//
		// },
		openTime: String,
		closeTime: String,

		createdAt: Date,
		updatedAt: Date
	},
	{ collection: 'restaurants', versionKey: false, _id: false }
);

const Restaurant = mongoose.model('Restaurant', restaurantSchema);

module.exports = Restaurant;
