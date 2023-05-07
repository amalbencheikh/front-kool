import Joi from "joi";
import HttpStatus from "http-status-codes";
import mongoose from "mongoose";

import Meal from "../../models/meal.model";
import Menu from "../../models/menu.model";
// import { getMealList } from './commons/getMealList';

export async function createMeal(req, res) {
  try {
    const body = {
      menuId: req.body.menuId,
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      coverPhoto: req.body.coverPhoto,
    };
    // validation
    const BodySchema = Joi.object({
      menuId: Joi.string().required(),
      name: Joi.string().required(),
      description: Joi.string().optional(),
      price: Joi.string().required(),
      coverPhoto: Joi.string().optional(),
    });

    const { error } = BodySchema.validate(body);
    if (error && error.details) {
      return res
        .status(HttpStatus.BAD_REQUEST)
        .json({ message: "invalid_input_data" });
    }

    const menu = await Menu.findOne({
      _id: body.menuId,
    });
    if (!menu) {
      return res
        .status(HttpStatus.NOT_FOUND)
        .json({ message: "menu_not_found" });
    }
    const meal = await Meal.findOne({
      name: body.name,
    });

    if (meal) {
      return res
        .status(HttpStatus.CONFLICT)
        .json({ message: "meal_already_exists" });
    }
    const mealId = new mongoose.Types.ObjectId();
    const newDate = new Date();

    const newMeal = {
      _id: mealId,
      menuId: mongoose.Types.ObjectId(body.menuId),
      name: body.name,
      description: body.description,
      price: body.price,
      coverPhoto: body.coverPhoto,
      createdAt: newDate,
      updatedAt: newDate,
    };

    await Meal.create(newMeal);

    return res.status(HttpStatus.OK).json({
      meal: newMeal,
    });
  } catch (err) {
    return res
      .status(HttpStatus.INTERNAL_SERVER_ERROR)
      .json({ message: "unknown_error_occurred" });
  }
}
