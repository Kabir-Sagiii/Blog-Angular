import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./root/components/home/home.component";

const routes: Routes = [
  {path : '' , component: HomeComponent},
  { path: 'developers', loadChildren: () => import('./developers/developers.module').then(m => m.DevelopersModule) }, { path: 'posts', loadChildren: () => import('./posts/posts.module').then(m => m.PostsModule) }, { path: 'profiles', loadChildren: () => import('./profiles/profiles.module').then(m => m.ProfilesModule) }, { path: 'users', loadChildren: () => import('./users/users.module').then(m => m.UsersModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
