import { Action, createReducer, on } from '@ngrx/store';
import {IDeveloper} from "../models/IDeveloper";
import * as developerActions from '../actions/developer.actions';

export const developerFeatureKey = 'developer';

export interface State {
  loading : boolean,
  developers : IDeveloper[],
  developer : IDeveloper,
  errorMessage : string
}

export const initialState: State = {
  loading : false,
  developers : [],
  developer : {} as IDeveloper,
  errorMessage : ''
};


export const reducer = createReducer(
  initialState,
  // get all developers
  on(developerActions.loadDevelopers, (state) => {
    return {
      ...state,
      loading : true
    }
  }),
  on(developerActions.loadDevelopersSuccess, (state, {developers}) => {
    return {
      ...state,
      loading : false,
      developers : developers
    }
  }),
  on(developerActions.loadDevelopersFailure, (state, {error}) => {
    return {
      ...state,
      loading : false,
      errorMessage : error
    }
  }),
  // get a developer
  on(developerActions.loadDeveloper, (state, {developerId}) => {
    return {
      ...state,
      loading : true
    }
  }),
  on(developerActions.loadDeveloperSuccess, (state, {developer}) => {
    return {
      ...state,
      loading : false,
      developer : developer
    }
  }),
  on(developerActions.loadDeveloperFailure, (state, {error}) => {
    return {
      ...state,
      loading : false,
      errorMessage : error
    }
  }),
);

