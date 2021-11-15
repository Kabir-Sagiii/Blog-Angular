import { Injectable } from '@angular/core';
import {Actions, createEffect, Effect, ofType} from '@ngrx/effects';
import * as postActions from '../actions/post.actions';
import {PostService} from "../services/post.service";
import {Router} from "@angular/router";
import * as profileActions from "../../profiles/actions/profile.actions";
import {catchError, concatMap, mergeMap, switchMap} from "rxjs/operators";
import {of} from "rxjs";

@Injectable()
export class PostEffects {

  constructor(private actions$: Actions,
              private postService : PostService,
              private router : Router) {}

  @Effect()
  public loadAllPosts = this.actions$.pipe(ofType(postActions.loadAllPosts),
    mergeMap((action) => {
      return this.postService.loadAllPosts()
        .pipe(
          switchMap(({posts}) => [
            postActions.loadAllPostsSuccess({posts})
          ]),
          catchError(error => of(postActions.loadAllPostsFailure(error)))
        );
    })
  );

  @Effect()
  public loadPost = this.actions$.pipe(ofType(postActions.loadPost),
    mergeMap((action) => {
      return this.postService.loadPost(action.postId)
        .pipe(
          switchMap(({post}) => [
            postActions.loadPostSuccess({post})
          ]),
          catchError(error => of(postActions.loadPostFailure(error)))
        );
    })
  );

  @Effect()
  public createPost = this.actions$.pipe(ofType(postActions.createPost),
    concatMap((action) => {
      return this.postService.createPost(action.text)
        .pipe(
          switchMap(({post}) => [
            postActions.createPostSuccess({post})
          ]),
          catchError(error => of(postActions.createPostFailure(error)))
        );
    })
  );

  @Effect()
  public createComment = this.actions$.pipe(ofType(postActions.createComment),
    concatMap((action) => {
      return this.postService.createComment(action.text, action.postId)
        .pipe(
          switchMap(({post}) => [
            postActions.createCommentSuccess({post})
          ]),
          catchError(error => of(postActions.createCommentFailure(error)))
        );
    })
  );

  @Effect()
  public deleteComment = this.actions$.pipe(ofType(postActions.deleteComment),
    concatMap((action) => {
      return this.postService.deleteComment(action.postId, action.commentId)
        .pipe(
          switchMap(({post}) => [
            postActions.deleteCommentSuccess({post})
          ]),
          catchError(error => of(postActions.deleteCommentFailure(error)))
        );
    })
  );

  @Effect()
  public deletePost = this.actions$.pipe(ofType(postActions.deletePost),
    concatMap((action) => {
      return this.postService.deletePost(action.postId)
        .pipe(
          switchMap(({post}) => [
            postActions.deletePostSuccess({post})
          ]),
          catchError(error => of(postActions.deletePostFailure(error)))
        );
    })
  );

  @Effect()
  public likePost = this.actions$.pipe(ofType(postActions.likePost),
    concatMap((action) => {
      return this.postService.likePost(action.postId)
        .pipe(
          switchMap(({post}) => [
            postActions.likePostSuccess({post})
          ]),
          catchError(error => of(postActions.likePostFailure(error)))
        );
    })
  );

  @Effect()
  public unlikePost = this.actions$.pipe(ofType(postActions.unlikePost),
    concatMap((action) => {
      return this.postService.unlikePost(action.postId)
        .pipe(
          switchMap(({post}) => [
            postActions.unlikePostSuccess({post})
          ]),
          catchError(error => of(postActions.unlikePostFailure(error)))
        );
    })
  );
}
