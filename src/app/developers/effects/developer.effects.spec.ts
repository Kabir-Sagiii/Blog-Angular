import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { DeveloperEffects } from './developer.effects';

describe('DeveloperEffects', () => {
  let actions$: Observable<any>;
  let effects: DeveloperEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DeveloperEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(DeveloperEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
