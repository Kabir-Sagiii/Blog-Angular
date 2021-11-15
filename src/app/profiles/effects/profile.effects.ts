import { Injectable } from '@angular/core';
import {Actions, createEffect, Effect, ofType} from '@ngrx/effects';
import * as profileActions from '../actions/profile.actions';
import {ProfileService} from "../services/profile.service";
import * as utilActions from '../../root/actions/util.actions';
import {catchError, concatMap, mergeMap, switchMap, tap} from "rxjs/operators";
import {of} from "rxjs";
import {Router} from "@angular/router";
import * as userActions from "../../users/actions/user.actions";

@Injectable()
export class ProfileEffects {

  constructor(private actions$: Actions,
              private profileService : ProfileService,
              private router : Router) {}

  @Effect()
  public loadProfile = this.actions$.pipe(ofType(profileActions.loadProfile),
    mergeMap((action) => {
      return this.profileService.loadProfile()
        .pipe(
          switchMap(({profile}) => [
            profileActions.loadProfileSuccess({profile})
          ]),
          catchError(error => of(profileActions.loadProfileFailure(error)))
        );
    })
  );

  @Effect()
  public deleteExperience = this.actions$.pipe(ofType(profileActions.deleteExperience),
    concatMap((action) => {
      return this.profileService.deleteExperience(action.experienceId)
        .pipe(
          switchMap(({profile}) => [
            profileActions.deleteExperienceSuccess({profile})
          ]),
          catchError(error => of(profileActions.deleteExperienceFailure(error)))
        );
    })
  );

  @Effect()
  public deleteEducation = this.actions$.pipe(ofType(profileActions.deleteEducation),
    concatMap((action) => {
      return this.profileService.deleteEducation(action.educationId)
        .pipe(
          switchMap(({profile}) => [
            profileActions.deleteEducationSuccess({profile})
          ]),
          catchError(error => of(profileActions.deleteEducationFailure(error)))
        );
    })
  );

  @Effect()
  public updateProfile = this.actions$.pipe(ofType(profileActions.updateProfile),
    concatMap((action) => {
      return this.profileService.updateProfile(action.profile)
        .pipe(
          switchMap(({profile}) => [
            profileActions.updateProfileSuccess({profile}),
            utilActions.setAlertUtils({message : 'Profile is Updated' , color : 'success'})
          ]),
          catchError(error => of(profileActions.updateProfileFailure(error)))
        );
    })
  );

  @Effect()
  public createProfile = this.actions$.pipe(ofType(profileActions.createProfile),
    concatMap((action) => {
      return this.profileService.createProfile(action.profile)
        .pipe(
          switchMap(({profile}) => [
            profileActions.createProfileSuccess({profile}),
            utilActions.setAlertUtils({message : 'Profile is Created' , color : 'success'})
          ]),
          catchError(error => of(profileActions.createProfileFailure(error)))
        );
    })
  );

  @Effect()
  public addExperience = this.actions$.pipe(ofType(profileActions.addExperience),
    concatMap((action) => {
      return this.profileService.addExperience(action.experience)
        .pipe(
          switchMap(({profile}) => [
            profileActions.addExperienceSuccess({profile}),
            utilActions.setAlertUtils({message : 'Experience is Added' , color : 'success'})
          ]),
          catchError(error => of(profileActions.addExperienceFailure(error)))
        );
    })
  );

  @Effect()
  public addEducation = this.actions$.pipe(ofType(profileActions.addEducation),
    concatMap((action) => {
      return this.profileService.addEducation(action.education)
        .pipe(
          switchMap(({profile}) => [
            profileActions.addEducationSuccess({profile}),
            utilActions.setAlertUtils({message : 'Education is Added' , color : 'success'})
          ]),
          catchError(error => of(profileActions.addEducationFailure(error)))
        );
    })
  );

  // Routing / Redirection

  // if update Profile is success, redirect to dashboard page
  @Effect({ dispatch: false })
  updateProfileSuccess$ = this.actions$.pipe(
    ofType(profileActions.updateProfileSuccess),
    tap(() => this.router.navigate(['/profiles/dashboard']))
  );

  // if Create Profile is success, redirect to dashboard page
  @Effect({ dispatch: false })
  createProfileSuccess$ = this.actions$.pipe(
    ofType(profileActions.createProfileSuccess),
    tap(() => this.router.navigate(['/profiles/dashboard']))
  );

  // if add Experience is success, redirect to dashboard page
  @Effect({ dispatch: false })
  addExperienceSuccess$ = this.actions$.pipe(
    ofType(profileActions.addExperienceSuccess),
    tap(() => this.router.navigate(['/profiles/dashboard']))
  );

  // if add Education is success, redirect to dashboard page
  @Effect({ dispatch: false })
  addEducationSuccess$ = this.actions$.pipe(
    ofType(profileActions.addEducationSuccess),
    tap(() => this.router.navigate(['/profiles/dashboard']))
  );
}
