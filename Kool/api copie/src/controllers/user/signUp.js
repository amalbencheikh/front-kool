import Joi from "joi";
import HttpStatus from "http-status-codes";
import mongoose from "mongoose";
import * as mongodb from "mongodb";
import crypto from "crypto";

import User from "../../models/user.model";

import { signAccessToken } from "../../services/auth";

export async function signUp(req, res) {
  try {
    // inputs
    const body = {
      email: req.body.email,
      password: req.body.password,
      fullName: req.body.fullName,
    };
    // validation
    const BodySchema = Joi.object({
      email: Joi.string().email().required(),
      password: Joi.string().min(8).required(),
      fullName: Joi.string().required(),
    });

    const { error } = BodySchema.validate(body);
    if (error && error.details) {
      console.log(error.details);
      return res
        .status(HttpStatus.BAD_REQUEST)
        .json({ message: "invalid_input_data" });
    }
    if (
      (body.professionId !== undefined &&
        body.professionId !== null &&
        !mongodb.ObjectID.isValid(body.professionId)) ||
      (body.licenseFileId !== undefined &&
        body.licenseFileId !== null &&
        !mongodb.ObjectID.isValid(body.licenseFileId))
    ) {
      return res
        .status(HttpStatus.BAD_REQUEST)
        .json({ message: "invalid_input_data" });
    }

    const userEmail = await User.findOne({
      email: body.email.toLowerCase(),
    });

    if (userEmail) {
      return res
        .status(HttpStatus.CONFLICT)
        .json({ message: "email_already_exists" });
    }

    const newDate = new Date();
    const verifyToken = crypto.randomBytes(32).toString("hex");

    const newUser = {
      _id: new mongoose.Types.ObjectId(),
      email: body.email.toLowerCase(),
      profile: {
        fullName: body.fullName,
      },
      account: {
        isDelivery: false,
        isVerified: true,
        verifyToken,
        password: body.password,
        activationStatus: "ACTIVE",
      },

      createdAt: newDate,
      updatedAt: newDate,
    };

    await User.create(newUser);

    const user = { uid: newUser._id };
    const accessToken = await signAccessToken(user);
    return res
      .status(HttpStatus.CREATED)
      .json({ success: true, accessToken: accessToken });
  } catch (err) {
    return res
      .status(HttpStatus.INTERNAL_SERVER_ERROR)
      .json({ message: "unknown_error_occurred" });
  }
}
