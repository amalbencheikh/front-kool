import Joi from "joi";
import HttpStatus from "http-status-codes";

import User from "../../models/user.model";
import { signAccessToken } from "../../services/auth";

export async function signIn(req, res) {
  try {
    const body = {
      email: req.body.email,
      password: req.body.password,
    };

    const BodySchema = Joi.object({
      email: Joi.string().required(),
      password: Joi.string().min(8).required(),
    });
    const { error } = BodySchema.validate(body);
    if (error && error.details) {
      return res
        .status(HttpStatus.BAD_REQUEST)
        .json({ message: "invalid_input_data" });
    }

    const user = await User.findOne({ email: body.email.toLowerCase() });

    if (!user) {
      return res
        .status(HttpStatus.CONFLICT)
        .json({ message: "user_not_found" });
    }

    if (
      user.account.activationStatus === "SUSPENDED" &&
      user.account.isActiveAt > new Date()
    ) {
      return res
        .status(HttpStatus.CONFLICT)
        .json({ message: "suspended_account" });
    }

    if (!user.account.isVerified) {
      return res
        .status(HttpStatus.CONFLICT)
        .json({ message: "unverified_account" });
    }

    if (!user.checkPassword(body.password)) {
      return res
        .status(HttpStatus.UNAUTHORIZED)
        .json({ message: "wrong_password" });
    }

    user.lastSignIn = new Date();
    // user.deviceId = body.deviceId;
    await user.save();

    const accessToken = await signAccessToken(user);

    return res.status(HttpStatus.OK).json({ accessToken });
  } catch (err) {
    return res
      .status(HttpStatus.INTERNAL_SERVER_ERROR)
      .json({ message: "unknown_error_occurred" });
  }
}
