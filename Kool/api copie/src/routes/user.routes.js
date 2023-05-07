import { Router } from "express";

import { verifyAccessToken } from "../services/auth";

import * as signUpCtrl from "../controllers/user/signUp";

import * as signInCtrl from "../controllers/user/signIn";
import * as signOutCtrl from "../controllers/user/signOut";

import * as changePasswordCtrl from "../controllers/user/changePassword";
import * as forgotPasswordCtrl from "../controllers/user/forgotPassword";
import * as checkPasswordResetTokenCtrl from "../controllers/user/checkPasswordResetToken";
import * as resetPasswordCtrl from "../controllers/user/resetPassword";
import * as getUserCtrl from "../controllers/user/commons/getUser";
import * as getUserIdCtrl from "../controllers/user/commons/getUserById";
const routes = new Router();

routes.post("/sign-up", signUpCtrl.signUp);
routes.post("/sign-in", signInCtrl.signIn);
routes.post("/sign-out", verifyAccessToken, signOutCtrl.signOut);
routes.post(
  "/change-password",
  verifyAccessToken,
  changePasswordCtrl.changePassword
);
routes.post("/forgot-password", forgotPasswordCtrl.forgotPassword);
routes.get(
  "/reset-password/check",
  checkPasswordResetTokenCtrl.checkPasswordResetToken
);
routes.post("/reset-password", resetPasswordCtrl.resetPassword);
routes.get("/detail", verifyAccessToken, getUserCtrl.getUser);
routes.get("/getId", verifyAccessToken, getUserIdCtrl.getUserById);

export default routes;
