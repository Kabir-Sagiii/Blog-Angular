import { Injectable } from '@angular/core';
import {Actions, createEffect, Effect, ofType} from '@ngrx/effects';
import {DeveloperService} from "../services/developer.service";
import * as developerActions from '../actions/developer.actions';
import {catchError, concatMap, mergeMap, switchMap} from "rxjs/operators";
import {of} from "rxjs";

@Injectable()
export class DeveloperEffects {

  constructor(private actions$: Actions,
              private developerService : DeveloperService) {}

  @Effect()
  public loadDevelopers = this.actions$.pipe(ofType(developerActions.loadDevelopers),
    mergeMap((action) => {
      return this.developerService.loadDevelopers()
        .pipe(
          switchMap(({developers}) => [
            developerActions.loadDevelopersSuccess({developers})
          ]),
          catchError(error => of(developerActions.loadDevelopersFailure(error)))
        );
    })
  );

  @Effect()
  public loadDeveloper = this.actions$.pipe(ofType(developerActions.loadDeveloper),
    mergeMap((action) => {
      return this.developerService.loadDeveloper(action.developerId)
        .pipe(
          switchMap(({developer}) => [
            developerActions.loadDeveloperSuccess({developer})
          ]),
          catchError(error => of(developerActions.loadDeveloperFailure(error)))
        );
    })
  );

}
