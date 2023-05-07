import Joi from "joi";
import HttpStatus from "http-status-codes";
import mongoose from "mongoose";

import Menu from "../../models/menu.model";
import Restaurant from "../../models/restaurant.model";
// import { getMenuList } from './commons/getMenuList';

export async function createMenu(req, res) {
  try {
    const body = {
      restaurantId: req.body.restaurantId,
      name: req.body.name,
      coverPhoto: req.body.coverPhoto,
    };

    const BodySchema = Joi.object({
      restaurantId: Joi.string().required(),
      name: Joi.string().required(),
      coverPhoto: Joi.string().optional(),
    });

    const { error } = BodySchema.validate(body);
    if (error && error.details) {
      return res
        .status(HttpStatus.BAD_REQUEST)
        .json({ message: "invalid_input_data" });
    }

    const restaurant = await Restaurant.findOne({
      _id: body.restaurantId,
    });
    if (!restaurant) {
      return res
        .status(HttpStatus.NOT_FOUND)
        .json({ message: "restaurant_not_found" });
    }

    const menu = await Menu.findOne({
      name: body.name,
    });

    if (menu) {
      return res
        .status(HttpStatus.CONFLICT)
        .json({ message: "menu_already_exists" });
    }
    const menuId = new mongoose.Types.ObjectId();
    const newDate = new Date();

    const newMenu = {
      _id: menuId,
      restaurantId: mongoose.Types.ObjectId(body.restaurantId),
      name: body.name,
      coverPhoto: body.coverPhoto,
      createdAt: newDate,
      updatedAt: newDate,
    };

    await Menu.create(newMenu);

    return res.status(HttpStatus.OK).json({
      menu: newMenu,
    });
  } catch (err) {
    return res
      .status(HttpStatus.INTERNAL_SERVER_ERROR)
      .json({ message: "unknown_error_occurred" });
  }
}
