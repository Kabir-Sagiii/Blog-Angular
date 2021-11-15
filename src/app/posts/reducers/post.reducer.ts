import { Action, createReducer, on } from '@ngrx/store';
import {IPost} from "../models/IPost";
import * as postActions from '../actions/post.actions';

export const postFeatureKey = 'post';

export interface State {
  loading : boolean,
  posts : IPost[],
  selectedPost : IPost,
  errorMessage : string
}

export const initialState: State = {
  loading : false,
  posts : [] as IPost[],
  selectedPost : {} as IPost,
  errorMessage : ''
};


export const reducer = createReducer(
  initialState,
  // load all Posts
  on(postActions.loadAllPosts, (state) => {
    return {
      ...state,
      loading : true
    }
  }),
  on(postActions.loadAllPostsSuccess, (state, {posts}) => {
    return {
      ...state,
      loading : false,
      posts : posts
    }
  }),
  on(postActions.loadAllPostsFailure, (state, {error}) => {
    return {
      ...state,
      loading : false,
      errorMessage : error
    }
  }),
  // Create Post
  on(postActions.createPost, (state, {text}) => {
    return {
      ...state,
      loading : true
    }
  }),
  on(postActions.createPostSuccess, (state, {post}) => {
    return {
      ...state,
      loading : false,
      posts : [post , ...state.posts]
    }
  }),
  on(postActions.createPostFailure, (state, {error}) => {
    return {
      ...state,
      loading : false,
      errorMessage : error
    }
  }),
  // load a post
  on(postActions.loadPost, (state, {postId}) => {
    return {
      ...state,
      loading : true
    }
  }),
  on(postActions.loadPostSuccess, (state, {post}) => {
    return {
      ...state,
      loading : false,
      selectedPost : post
    }
  }),
  on(postActions.loadPostFailure, (state, {error}) => {
    return {
      ...state,
      loading : false,
      errorMessage : error
    }
  }),
  // Create Comment
  on(postActions.createComment, (state, {text, postId}) => {
    return {
      ...state,
      loading : true
    }
  }),
  on(postActions.createCommentSuccess, (state, {post}) => {
    return {
      ...state,
      loading : false,
      selectedPost : post
    }
  }),
  on(postActions.createCommentFailure, (state, {error}) => {
    return {
      ...state,
      loading : false,
      errorMessage : error
    }
  }),
  // delete Comment
  on(postActions.deleteComment, (state , {postId , commentId}) => {
    return {
      ...state,
      loading : true
    }
  }),
  on(postActions.deleteCommentSuccess, (state , {post}) => {
    return {
      ...state,
      loading : false,
      selectedPost : post
    }
  }),
  on(postActions.deleteCommentFailure, (state , {error}) => {
    return {
      ...state,
      loading : false,
      errorMessage : error
    }
  }),
  // delete Post
  on(postActions.deletePost, (state , {postId}) => {
    return {
      ...state,
      loading : true
    }
  }),
  on(postActions.deletePostSuccess, (state , {post}) => {
    return {
      ...state,
      loading : false,
      posts : state.posts.filter(selectedPost => selectedPost._id !== post._id)
    }
  }),
  on(postActions.deletePostFailure, (state , {error}) => {
    return {
      ...state,
      loading : false,
      errorMessage : error
    }
  }),
  // Like Post
  on(postActions.likePost, (state , {postId}) => {
    return {
      ...state,
      loading : false
    }
  }),
  on(postActions.likePostSuccess, (state , {post}) => {
    let likedPosts = state.posts.map(selectedPost => {
      if(selectedPost._id === post._id){
        return post;
      }
      return selectedPost;
    })
    return {
      ...state,
      loading : false,
      posts : likedPosts
    }
  }),
  on(postActions.likePostFailure, (state , {error}) => {
    return {
      ...state,
      loading : false,
      errorMessage : error
    }
  }),
  // Un-Like Post
  on(postActions.unlikePost, (state , {postId}) => {
    return {
      ...state,
      loading : false
    }
  }),
  on(postActions.unlikePostSuccess, (state , {post}) => {
    let unLikedPosts = state.posts.map(selectedPost => {
      if(selectedPost._id === post._id){
        return post;
      }
      return selectedPost;
    })
    return {
      ...state,
      loading : false,
      posts : unLikedPosts
    }
  }),
  on(postActions.unlikePostFailure, (state , {error}) => {
    return {
      ...state,
      loading : false,
      errorMessage : error
    }
  }),
);

