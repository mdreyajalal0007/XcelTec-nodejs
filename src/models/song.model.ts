import mongoose, { Model, model, ObjectId, Schema } from "mongoose";
import { Helper } from "../classes/Helper";
import { IDatabaseSchema } from "../interfaces/IDatabaseSchema";


export interface SongModel {
  songName?: string;
  isDelete?: boolean;
}

const schema = new Schema<SongModel>(
  {
    songName: { type: String, required: false },
    isDelete: { type: Boolean, required: true, default: false },
  },
  {
    timestamps: true,
  }
);


export const SongSchema = model<SongModel>(
  IDatabaseSchema.SONG,
  schema
);
