import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from "@angular/common/http";
import { ProfilesRoutingModule } from './profiles-routing.module';
import { ProfilesComponent } from './profiles.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CreateProfileComponent } from './components/create-profile/create-profile.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { AddEducationComponent } from './components/add-education/add-education.component';
import { AddExperienceComponent } from './components/add-experience/add-experience.component';
import { StoreModule } from '@ngrx/store';
import * as fromState from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { ProfileEffects } from './effects/profile.effects';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [ProfilesComponent, DashboardComponent, CreateProfileComponent, EditProfileComponent, AddEducationComponent, AddExperienceComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ProfilesRoutingModule,
    StoreModule.forFeature(fromState.stateFeatureKey, fromState.reducers, { metaReducers: fromState.metaReducers }),
    EffectsModule.forFeature([ProfileEffects])
  ]
})
export class ProfilesModule { }
