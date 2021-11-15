import { createAction, props } from '@ngrx/store';
import {Education, Experience, IProfile} from "../models/IProfile";

// load Profile
export const loadProfile = createAction(
  '[Profile] Load Profile'
);

export const loadProfileSuccess = createAction(
  '[Profile] Load Profile Success',
  props<{ profile: IProfile }>()
);

export const loadProfileFailure = createAction(
  '[Profile] Load Profile Failure',
  props<{ error: string }>()
);

// delete Experience
export const deleteExperience = createAction(
  '[Profile] Delete Experience',
  props<{experienceId : string}>()
);

export const deleteExperienceSuccess = createAction(
  '[Profile] Delete Experience Success',
  props<{ profile: IProfile }>()
);

export const deleteExperienceFailure = createAction(
  '[Profile] Delete Experience Failure',
  props<{ error: string }>()
);

// delete Education
export const deleteEducation = createAction(
  '[Profile] Delete Education',
  props<{educationId : string}>()
);

export const deleteEducationSuccess = createAction(
  '[Profile] Delete Education Success',
  props<{ profile: IProfile }>()
);

export const deleteEducationFailure = createAction(
  '[Profile] Delete Education Failure',
  props<{ error: string }>()
);

// Update Profile
export const updateProfile = createAction(
  '[Profile] Update Profile',
  props<{profile : IProfile}>()
);

export const updateProfileSuccess = createAction(
  '[Profile] Update Profile Success',
  props<{ profile: IProfile }>()
);

export const updateProfileFailure = createAction(
  '[Profile] Update Profile Failure',
  props<{ error: string }>()
);

// Add Experience
export const addExperience = createAction(
  '[Profile] Add Experience',
  props<{experience : Experience}>()
);

export const addExperienceSuccess = createAction(
  '[Profile] Add Experience Success',
  props<{ profile: IProfile }>()
);

export const addExperienceFailure = createAction(
  '[Profile] Add Experience Failure',
  props<{ error: string }>()
);

// Add Education
export const addEducation = createAction(
  '[Profile] Add Education',
  props<{education : Education}>()
);

export const addEducationSuccess = createAction(
  '[Profile] Add Education Success',
  props<{ profile: IProfile }>()
);

export const addEducationFailure = createAction(
  '[Profile] Add Education Failure',
  props<{ error: string }>()
);

// Clear Profile
export const clearProfile = createAction(
  '[Profile] Clear Profile'
);

// create Profile
export const createProfile = createAction(
  '[Profile] create Profile',
  props<{profile : IProfile}>()
);

export const createProfileSuccess = createAction(
  '[Profile] create Profile Success',
  props<{ profile: IProfile }>()
);

export const createProfileFailure = createAction(
  '[Profile] create Profile Failure',
  props<{ error: string }>()
);
