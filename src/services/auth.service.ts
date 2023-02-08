import { Helper } from "../classes/Helper";
import { ExternalApis } from "../constants/ExternalApis";
import { SongSchema } from "../models/song.model";
import { UserSchema } from "../models/user.model";

export class AuthService {
  static async register(
    params: {
      username: string;
      password: string;
    },
    callback: Function
  ) {
    try {
      await UserSchema.create(params);
      callback(true);
    } catch {
      callback(false);
    }
  }
  static async login(
    params: {
      username: string;
      password: string;
    },
    callback: Function
  ) {
    try {
      let Password = Helper.hashPassword(params.password);
      params.password = Helper.hashPassword(params.password);
      let result: any = await UserSchema.findOne(params);
      console.log(result);

      if (!result) {
        callback(false);
        return;
      }

      result = result.toObject();
      result.accessToken = await Helper.generateLoginToken(result);
      callback(result);
    } catch {
      callback(false);
    }
  }

  static async postSong(
    params: {
      songName: string;
    },
    callback: Function
  ) {
    try {
      console.log(params,"=============")
      await SongSchema.create(params);
      callback(true);
    } catch {
      callback(false);
    }
  }

  static async updateSong(
   ID:any, params: {
      songName: string;
    },
    callback: Function
  ) {
    try {
      await SongSchema.findByIdAndUpdate(ID, {songName:params.songName});
      callback(true);
    } catch {
      callback(false);
    }
  }

  static async getSong(
    
     callback: Function
   ) {
     try {
       const result = await SongSchema.find({});
       callback(result);
     } catch {
       callback(false);
     }
   }

   static async deleteSong(
    ID:any,
    callback: Function
  ) {
    try {
       await SongSchema.findByIdAndUpdate(ID,{isDelete:true});
      callback(true);
    } catch {
      callback(false);
    }
  }
}
