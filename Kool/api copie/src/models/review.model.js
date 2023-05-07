import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema(
	{
		_id: mongoose.Schema.ObjectId,
		posterId: {
			type: mongoose.Schema.ObjectId,
			ref: 'User'
		},
		restaurantId: {
			type: mongoose.Schema.ObjectId,
			ref: 'Restaurant'
		},
		stars: String,
		text: String,

		createdAt: Date,
		updatedAt: Date
	},
	{ collection: 'reviews', versionKey: false, _id: false }
);

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;
