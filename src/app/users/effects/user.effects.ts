import { Injectable } from '@angular/core';
import {Actions, createEffect, Effect, ofType} from '@ngrx/effects';
import * as userActions from '../../users/actions/user.actions';
import * as utilActions from '../../root/actions/util.actions';
import {catchError, concatMap, map, switchMap, tap} from "rxjs/operators";
import {UserService} from "../services/user.service";
import {Router} from "@angular/router";
import {of} from "rxjs";
import {ifTrue} from "codelyzer/util/function";

@Injectable()
export class UserEffects {

  constructor(private actions$: Actions,
              private userService : UserService,
              private router:Router) {}

  /*@Effect()
  public registerUser(){
    return this.actions$.pipe(
      ofType(userActions.registerUser),
      concatMap((action) => this.userService.registerUser(action.user).pipe(
        map(({msg}) => userActions.registerUserSuccess({msg})),
        catchError((error) => of(userActions.registerUserFailure({error})))
      ))
    )
  }*/

  @Effect()
  public registerUser = this.actions$.pipe(ofType(userActions.registerUser),
    concatMap((action) => {
      return this.userService.registerUser(action.user)
        .pipe(
          switchMap(({msg}) => [
            userActions.registerUserSuccess({msg}),
            utilActions.setAlertUtils({message : msg , color : 'success'})
          ]),
          catchError(error => of(userActions.registerUserFailure(error)))
        );
    })
  );

  @Effect()
  public loginUser = this.actions$.pipe(ofType(userActions.loginUser),
    concatMap((action) => {
      return this.userService.loginUser(action.user)
        .pipe(
          switchMap(({msg, token}) => [
            userActions.loginUserSuccess({msg , token}),
            utilActions.setAlertUtils({message : msg , color : 'success'}),
            userActions.getUserInfo()
          ]),
          catchError(error => of(userActions.loginUserFailure(error)))
        );
    })
  );

  @Effect()
  public getUserInfo = this.actions$.pipe(ofType(userActions.getUserInfo),
    concatMap((action) => {
      return this.userService.getUserInfo()
        .pipe(
          switchMap(({user}) => [
            userActions.getUserInfoSuccess({user})
          ]),
          catchError(error => of(userActions.getUserInfoFailure(error)))
        );
    })
  );

  // if registration is success, redirect to login page
  @Effect({ dispatch: false })
  registerUserSuccess$ = this.actions$.pipe(
    ofType(userActions.registerUserSuccess),
    tap(() => this.router.navigate(['/users/login']))
  );

  // if login is success, redirect to home page
  @Effect({ dispatch: false })
  loginUserSuccess$ = this.actions$.pipe(
    ofType(userActions.loginUserSuccess),
    tap(() => this.router.navigate(['/posts/list']))
  );
}
