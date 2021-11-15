import { createAction, props } from '@ngrx/store';
import {IDeveloper} from "../models/IDeveloper";

// get all profiles
export const loadDevelopers = createAction(
  '[Developer] Load Developers'
);

export const loadDevelopersSuccess = createAction(
  '[Developer] Load Developers Success',
  props<{ developers: IDeveloper[] }>()
);

export const loadDevelopersFailure = createAction(
  '[Developer] Load Developers Failure',
  props<{ error: string }>()
);

// load a developer
export const loadDeveloper = createAction(
  '[Developer] Load Developer',
  props<{developerId : string}>()
);

export const loadDeveloperSuccess = createAction(
  '[Developer] Load Developer Success',
  props<{ developer: IDeveloper }>()
);

export const loadDeveloperFailure = createAction(
  '[Developer] Load Developer Failure',
  props<{ error: string }>()
);
