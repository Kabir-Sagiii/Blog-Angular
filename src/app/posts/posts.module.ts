import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { PostsRoutingModule } from './posts-routing.module';
import { PostsComponent } from './posts.component';
import { CommentsComponent } from './components/comments/comments.component';
import { StoreModule } from '@ngrx/store';
import * as fromState from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { PostEffects } from './effects/post.effects';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';


@NgModule({
  declarations: [PostsComponent, CommentsComponent, PostListComponent, PostDetailsComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    PostsRoutingModule,
    StoreModule.forFeature(fromState.stateFeatureKey, fromState.reducers, { metaReducers: fromState.metaReducers }),
    EffectsModule.forFeature([PostEffects])
  ]
})
export class PostsModule { }
