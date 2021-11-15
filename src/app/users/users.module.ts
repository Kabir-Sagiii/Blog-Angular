import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { UserRegisterComponent } from './components/user-register/user-register.component';
import { StoreModule } from '@ngrx/store';
import * as fromState from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './effects/user.effects';
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [UsersComponent, UserLoginComponent, UserRegisterComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    UsersRoutingModule,
    StoreModule.forFeature(fromState.stateFeatureKey, fromState.reducers, { metaReducers: fromState.metaReducers }),
    EffectsModule.forFeature([UserEffects])
  ]
})
export class UsersModule { }
