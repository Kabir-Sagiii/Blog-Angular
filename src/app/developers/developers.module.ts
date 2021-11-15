import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";
import { DevelopersRoutingModule } from './developers-routing.module';
import { DevelopersComponent } from './developers.component';
import { DeveloperListComponent } from './components/developer-list/developer-list.component';
import { DeveloperDetailsComponent } from './components/developer-details/developer-details.component';
import { StoreModule } from '@ngrx/store';
import * as fromState from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { DeveloperEffects } from './effects/developer.effects';


@NgModule({
  declarations: [DevelopersComponent, DeveloperListComponent, DeveloperDetailsComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    DevelopersRoutingModule,
    StoreModule.forFeature(fromState.stateFeatureKey, fromState.reducers, { metaReducers: fromState.metaReducers }),
    EffectsModule.forFeature([DeveloperEffects])
  ]
})
export class DevelopersModule { }
