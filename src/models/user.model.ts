import mongoose, { Model, model, ObjectId, Schema } from "mongoose";
import { Helper } from "../classes/Helper";
import { IDatabaseSchema } from "../interfaces/IDatabaseSchema";


export interface UserModel {
  username?: string;
  password: string;
  isDelete?: boolean;
}

const schema = new Schema<UserModel>(
  {
    username: { type: String, required: true },
    password: { type: String, required: true },
    isDelete: { type: Boolean, required: true, default: false },
  },
  {
    timestamps: true,
  }
);

schema.pre("save", function (next) {
  this.password = Helper.hashPassword(this.password);
  next();
});


export const UserSchema = model<UserModel>(
  IDatabaseSchema.USERS,
  schema
);
