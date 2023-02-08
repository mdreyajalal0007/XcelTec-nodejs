import { AuthController } from "../controllers";
import express from "express";
import { RequestValidation } from "../classes/RequestValidation";
import { requestValidationConfig } from "../config/requestValidationConfig";
const authRouter = express.Router();

authRouter.post(
  "/register",
  RequestValidation.validateFunction(requestValidationConfig.register),
  AuthController.register
);

authRouter.post(
    "/login",
    RequestValidation.validateFunction(requestValidationConfig.login),
    AuthController.login
  );

  authRouter.post(
    "/post-song",
    RequestValidation.validateFunction(requestValidationConfig.postSong),
    AuthController.postSong
  );

  authRouter.put(
    "/update-song/:id",
    RequestValidation.validateFunction(requestValidationConfig.updateSong),
    AuthController.updateSong
  );

  authRouter.get(
    "/get-song",
    AuthController.getSong
  );

  authRouter.delete(
    "/delete-song/:id",
    RequestValidation.validateFunction(requestValidationConfig.deleteSong),
    AuthController.deleteSong
  );

export default authRouter;
