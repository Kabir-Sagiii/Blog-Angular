import { createAction, props } from '@ngrx/store';

export const setAlertUtils = createAction(
  '[Util] Set Alert Utils',
  props<{message : string , color : string}>()
);

export const removeAlertUtils = createAction(
  '[Util] Remove Alert Utils'
);

export const loadUtilsSuccess = createAction(
  '[Util] Load Utils Success',
  props<{ data: any }>()
);

export const loadUtilsFailure = createAction(
  '[Util] Load Utils Failure',
  props<{ error: any }>()
);
