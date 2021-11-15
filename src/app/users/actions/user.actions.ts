import { createAction, props } from '@ngrx/store';
import {IUser} from "../models/IUser";

// Register a User
export const registerUser = createAction(
  '[User] register User',
  props<{user : IUser}>()
);

export const registerUserSuccess = createAction(
  '[User] register User Success',
  props<{ msg: string }>()
);

export const registerUserFailure = createAction(
  '[User] register User Failure',
  props<{ error: string }>()
);

// Login a User
export const loginUser = createAction(
  '[User] login User',
  props<{user : IUser}>()
);

export const loginUserSuccess = createAction(
  '[User] login User Success',
  props<{ msg: string , token : string }>()
);

export const loginUserFailure = createAction(
  '[User] login User Failure',
  props<{ error: string }>()
);

// Get User Info
export const getUserInfo = createAction(
  '[User] GET user Info'
);

export const getUserInfoSuccess = createAction(
  '[User] Get User Info Success',
  props<{ user: IUser}>()
);

export const getUserInfoFailure = createAction(
  '[User] Get User Info Failure',
  props<{ error: string }>()
);

export const logOutUser = createAction(
  '[User] LogOut User'
);
