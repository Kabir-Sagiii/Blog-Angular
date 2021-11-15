import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as utilReducer from '../../app/root/reducers/util.reducer';
import * as userReducer from '../../app/users/reducers/user.reducer';
import * as developerReducer from '../../app/developers/reducers/developer.reducer';
import * as profileReducer from '../../app/profiles/reducers/profile.reducer';
import * as postReducer from '../../app/posts/reducers/post.reducer';

export interface State {
  [utilReducer.utilFeatureKey] : utilReducer.State,
  [userReducer.userFeatureKey] : userReducer.State,
  [developerReducer.developerFeatureKey] : developerReducer.State,
  [profileReducer.profileFeatureKey] : profileReducer.State,
  [postReducer.postFeatureKey] : postReducer.State
}

export const reducers: ActionReducerMap<State> = {
  [utilReducer.utilFeatureKey] : utilReducer.reducer,
  [userReducer.userFeatureKey] : userReducer.reducer,
  [developerReducer.developerFeatureKey] : developerReducer.reducer,
  [profileReducer.profileFeatureKey] : profileReducer.reducer,
  [postReducer.postFeatureKey] : postReducer.reducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
