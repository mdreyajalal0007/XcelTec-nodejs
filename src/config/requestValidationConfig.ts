
import { body, CustomValidator, param, query } from "express-validator";

import {
  UserSchema,
} from "../models/user.model";

const userExists: CustomValidator = (value) => {
  return UserSchema.find({ username: value }).then((user) => {
    if (user && user.length) {
      return Promise.reject("Username already registered.");
    }
  });
};
const userNotExists: CustomValidator = (value) => {
  return UserSchema.find({ username: value }).then((user) => {
    if (user && user.length === 0) {
      return Promise.reject("User is not registered.");
    } else if (user[0].isDelete) {
      return Promise.reject("User is deactivated.");
    }
  });
};
export const requestValidationConfig = {
  

  register:[
    body("username").isLength({min:3,max:15}).isString().exists().custom(userExists),
    body("password").isLength({min:6,max:15}).exists()
  ],
  login:[
    body("username").isLength({min:6,max:15}).exists().custom(userNotExists),
    body("password").isLength({min:6,max:15}).exists()
 
  ],

  postSong :[
    body("songName").isString().exists(),
  ],

  updateSong:[
    param("id").isMongoId().exists(),
    body("songName").exists()
  ],
  deleteSong:[
    param("id").isMongoId().exists(),
  ]

};
