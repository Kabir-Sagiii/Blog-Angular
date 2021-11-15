import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostsComponent } from './posts.component';
import {PostListComponent} from "./components/post-list/post-list.component";
import {PostDetailsComponent} from "./components/post-details/post-details.component";

const routes: Routes = [
  { path: '', component: PostsComponent },
  { path: 'list', component: PostListComponent },
  { path: ':postId', component: PostDetailsComponent },

  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
