import { Action, createReducer, on } from '@ngrx/store';
import {IUser} from "../models/IUser";
import * as userActions from '../actions/user.actions';

export const userFeatureKey = 'user';

export interface State {
  loading : boolean,
  isAuthenticated : boolean,
  token : string,
  user : IUser,
  errorMessage : string
}

export const initialState: State = {
  loading : false,
  isAuthenticated : false,
  token : '',
  user : {} as IUser,
  errorMessage : ''
};


export const reducer = createReducer(
  initialState,
  // register a User
  on(userActions.registerUser, (state , {user}) => {
    return {
      ...state,
      loading : true
    }
  }),
  on(userActions.registerUserSuccess, (state , {msg}) => {
    return {
      ...state,
      loading : false
    }
  }),
  on(userActions.registerUserFailure, (state , {error}) => {
    return {
      ...state,
      loading : false,
      errorMessage : error
    }
  }),
  // Login a User
  on(userActions.loginUser, (state , {user}) => {
    return {
      ...state,
      loading : true
    }
  }),
  on(userActions.loginUserSuccess, (state , {msg, token}) => {
    localStorage.setItem('angular-social-token' , token);
    return {
      ...state,
      loading : false,
      token : token,
      isAuthenticated : true
    }
  }),
  on(userActions.loginUserFailure, (state , {error}) => {
    localStorage.removeItem('angular-social-token');
    return {
      ...state,
      loading : false,
      token : '',
      isAuthenticated : false,
      user : {} as IUser,
      errorMessage : error
    }
  }),
  // Get User Info
  on(userActions.getUserInfo, (state) => {
    return {
      ...state,
      loading : true
    }
  }),
  on(userActions.getUserInfoSuccess, (state, {user}) => {
    return {
      ...state,
      loading : false,
      user : user
    }
  }),
  on(userActions.getUserInfoFailure, (state, {error}) => {
    return {
      ...state,
      loading : false,
      user : {} as IUser,
      errorMessage : error
    }
  }),
  on(userActions.logOutUser, (state) => {
    localStorage.removeItem('angular-social-token');
    return {
      ...state,
      loading : false,
      token : '',
      isAuthenticated : false,
      user : {} as IUser
    }
  })
);

