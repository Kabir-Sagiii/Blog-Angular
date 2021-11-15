import { Action, createReducer, on } from '@ngrx/store';
import * as utilActions from '../actions/util.actions';

export const utilFeatureKey = 'util';

export interface AlertMessage {
    message : string,
    color : string
}

export interface State {
  messages : AlertMessage[]
}

export const initialState: State = {
  messages : []
};


export const reducer = createReducer(
  initialState,
  on(utilActions.setAlertUtils, (state , {message , color}) => {
    return {
      ...state,
      messages : [...state.messages , {message , color}]
    }
  }),
  on(utilActions.removeAlertUtils , (state) => {
    return {
      ...state,
      messages : []
    }
  })
);

