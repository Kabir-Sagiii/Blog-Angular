import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfilesComponent } from './profiles.component';
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {EditProfileComponent} from "./components/edit-profile/edit-profile.component";
import {AddExperienceComponent} from "./components/add-experience/add-experience.component";
import {AddEducationComponent} from "./components/add-education/add-education.component";
import {CreateProfileComponent} from "./components/create-profile/create-profile.component";

const routes: Routes = [
  { path: '', component: ProfilesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'edit-profile', component: EditProfileComponent },
  { path: 'add-experience', component: AddExperienceComponent },
  { path: 'add-education', component: AddEducationComponent },
  { path: 'add-profile', component: CreateProfileComponent },
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfilesRoutingModule { }
