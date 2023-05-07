import Joi from "joi";
import HttpStatus from "http-status-codes";
import mongoose from "mongoose";

import Restaurant from "../../models/restaurant.model";
// import { getRestaurantsList } from './commons/getRestaurantsList';

export async function createRestaurant(req, res) {
  try {
    const body = {
      name: req.body.name,
      address: req.body.address,
      gps: req.body.gps,
      deliveryFee: req.body.deliveryFee,
      openTime: req.body.openTime,
      closeTime: req.body.closeTime,
    };

    const BodySchema = Joi.object({
      name: Joi.string().required(),
      address: Joi.string().optional(),
      gps: Joi.string().optional(),
      deliveryFee: Joi.number().required(),
      openTime: Joi.string().required(),
      closeTime: Joi.string().required(),
    });

    const { error } = BodySchema.validate(body);
    if (error && error.details) {
      return res
        .status(HttpStatus.BAD_REQUEST)
        .json({ message: "invalid_input_data" });
    }

    const restaurant = await Restaurant.findOne({
      name: body.name,
    });

    if (restaurant) {
      return res
        .status(HttpStatus.CONFLICT)
        .json({ message: "restaurant_already_exists" });
    }

    const restaurantId = new mongoose.Types.ObjectId();
    const newDate = new Date();

    const newRestaurant = {
      _id: restaurantId,
      managerId: req.payload.uid,
      name: body.name,
      address: body.address,
      gps: body.gps,
      deliveryFee: body.deliveryFee,
      openTime: body.openTime,
      closeTime: body.closeTime,
      createdAt: newDate,
      updatedAt: newDate,
    };

    await Restaurant.create(newRestaurant);

    return res.status(HttpStatus.OK).json({
      restaurant: newRestaurant,
    });
  } catch (err) {
    return res
      .status(HttpStatus.INTERNAL_SERVER_ERROR)
      .json({ message: "unknown_error_occurred" });
  }
}
