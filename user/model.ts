import type {Types} from 'mongoose';
import {Schema, model} from 'mongoose';

/**
 * This file defines the properties stored in a User
 * DO NOT implement operations here ---> use collection file
 */

// Type definition for User on the backend
export type User = {
  _id: Types.ObjectId; // MongoDB assigns each object this ID on creation
  username: string;
  password: string;
  dateJoined: Date;
  points: number;
  limit: number;
  dateLoggedIn: Date;
  pendingRequests: Array<String>;
};

// Mongoose schema definition for interfacing with a MongoDB table
// Users stored in this table will have these fields, with the
// type given by the type property, inside MongoDB
const UserSchema = new Schema({
  // The user's username
  username: {
    type: String,
    required: true
  },
  // The user's password
  password: {
    type: String,
    required: true
  },
  // The date the user joined
  dateJoined: {
    type: Date,
    required: true
  },
  //The points a user currently has
  points: {
    type: Number,
    required: true
  },
  //The currently limit a user set
  limit: {
    type: Number,
    required: true
  },
  // The time the user logs in
  dateLoggedIn: {
    type: Date,
    required: true
  },
  //The pending requests a user currently has
  pendingRequests: {
    type: Array,
    required: true
  }
});

const UserModel = model<User>('User', UserSchema);
export default UserModel;