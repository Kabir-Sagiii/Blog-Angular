import { Action, createReducer, on } from '@ngrx/store';
import * as profileActions from '../actions/profile.actions';
import {IProfile} from "../models/IProfile";

export const profileFeatureKey = 'profile';

export interface State {
  loading : boolean,
  profile : IProfile,
  errorMessage : string
}

export const initialState: State = {
  loading : false,
  profile : {} as IProfile,
  errorMessage : ''
};


export const reducer = createReducer(
  initialState,
  // load Profile
  on(profileActions.loadProfile, (state) => {
    return {
      ...state,
      loading : true
    }
  }),
  on(profileActions.loadProfileSuccess, (state, {profile}) => {
    return {
      ...state,
      loading : false,
      profile : profile
    }
  }),
  on(profileActions.loadProfileFailure, (state, {error}) => {
    return {
      ...state,
      loading : false,
      errorMessage : error
    }
  }),
  // delete Experience
  on(profileActions.deleteExperience, (state , {experienceId}) => {
    return {
      ...state,
      loading : true
    }
  }),
  on(profileActions.deleteExperienceSuccess, (state , {profile}) => {
    return {
      ...state,
      loading : false,
      profile : profile
    }
  }),
  on(profileActions.deleteExperienceFailure, (state , {error}) => {
    return {
      ...state,
      loading : false,
      errorMessage : error
    }
  }),
  // delete Education
  on(profileActions.deleteEducation, (state , {educationId}) => {
    return {
      ...state,
      loading : true
    }
  }),
  on(profileActions.deleteEducationSuccess, (state , {profile}) => {
    return {
      ...state,
      loading : false,
      profile : profile
    }
  }),
  on(profileActions.deleteEducationFailure, (state , {error}) => {
    return {
      ...state,
      loading : false,
      errorMessage : error
    }
  }),
  // update Profile
  on(profileActions.updateProfile, (state , {profile}) => {
    return {
      ...state,
      loading : true
    }
  }),
  on(profileActions.updateProfileSuccess, (state , {profile}) => {
    return {
      ...state,
      loading : false,
      profile : profile
    }
  }),
  on(profileActions.updateProfileFailure, (state , {error}) => {
    return {
      ...state,
      loading : false,
      errorMessage : error
    }
  }),
  // add Experience
  on(profileActions.addExperience, (state , {experience}) => {
    return {
      ...state,
      loading : true
    };
  }),
  on(profileActions.addExperienceSuccess, (state , {profile}) => {
    return {
      ...state,
      loading : false,
      profile : profile
    };
  }),
  on(profileActions.addExperienceFailure, (state , {error}) => {
    return {
      ...state,
      loading : false,
      errorMessage : error
    };
  }),
  // add Education
  on(profileActions.addEducation, (state , {education}) => {
    return {
      ...state,
      loading : true
    };
  }),
  on(profileActions.addEducationSuccess, (state , {profile}) => {
    return {
      ...state,
      loading : false,
      profile : profile
    };
  }),
  on(profileActions.addEducationFailure, (state , {error}) => {
    return {
      ...state,
      loading : false,
      errorMessage : error
    };
  }),
  // clear Profile
  on(profileActions.clearProfile, (state) => {
    return {
      ...state,
      profile : {} as IProfile,
    }
  }),
  // Create Profile
  on(profileActions.createProfile, (state , {profile}) => {
    return {
      ...state,
      loading : true
    }
  }),
  on(profileActions.createProfileSuccess, (state , {profile}) => {
    return {
      ...state,
      loading : false,
      profile : profile
    }
  }),
  on(profileActions.createProfileFailure, (state , {error}) => {
    return {
      ...state,
      loading : false,
      errorMessage : error
    }
  }),

);

