import { createAction, props } from '@ngrx/store';
import {IPost} from "../models/IPost";

// to load all posts
export const loadAllPosts = createAction(
  '[Post] Load All Posts'
);

export const loadAllPostsSuccess = createAction(
  '[Post] Load All Posts Success',
  props<{ posts: IPost[] }>()
);

export const loadAllPostsFailure = createAction(
  '[Post] Load All Posts Failure',
  props<{ error: string }>()
);

// Create Post
export const createPost = createAction(
  '[Post] Create Post',
  props<{text : string}>()
);

export const createPostSuccess = createAction(
  '[Post] Create Post Success',
  props<{ post: IPost }>()
);

export const createPostFailure = createAction(
  '[Post] Create Post Failure',
  props<{ error: string }>()
);

// load a post
export const loadPost = createAction(
  '[Post] Load Post',
  props<{postId :string }>()
);

export const loadPostSuccess = createAction(
  '[Post] Load Post Success',
  props<{ post: IPost }>()
);

export const loadPostFailure = createAction(
  '[Post] Load Post Failure',
  props<{ error: string }>()
);

// Create Comment
export const createComment = createAction(
  '[Post] Create Comment',
  props<{text : string , postId : string}>()
);

export const createCommentSuccess = createAction(
  '[Post] Create Comment Success',
  props<{ post: IPost }>()
);

export const createCommentFailure = createAction(
  '[Post] Create Comment Failure',
  props<{ error: string }>()
);

// delete Comment
export const deleteComment = createAction(
  '[Post] delete Comment',
  props<{postId : string , commentId : string}>()
);

export const deleteCommentSuccess = createAction(
  '[Post] delete Comment Success',
  props<{ post: IPost }>()
);

export const deleteCommentFailure = createAction(
  '[Post] delete Comment Failure',
  props<{ error: string }>()
);

// delete Post
export const deletePost = createAction(
  '[Post] delete Post',
  props<{postId : string}>()
);

export const deletePostSuccess = createAction(
  '[Post] delete Post Success',
  props<{ post: IPost }>()
);

export const deletePostFailure = createAction(
  '[Post] delete Post Failure',
  props<{ error: string }>()
);

// like Post
export const likePost = createAction(
  '[Post] like Post',
  props<{postId : string}>()
);

export const likePostSuccess = createAction(
  '[Post] like Post Success',
  props<{ post: IPost }>()
);

export const likePostFailure = createAction(
  '[Post] like Post Failure',
  props<{ error: string }>()
);

// unlike Post
export const unlikePost = createAction(
  '[Post] unlike Post',
  props<{postId : string}>()
);

export const unlikePostSuccess = createAction(
  '[Post] unlike Post Success',
  props<{ post: IPost }>()
);

export const unlikePostFailure = createAction(
  '[Post] unlike Post Failure',
  props<{ error: string }>()
);
