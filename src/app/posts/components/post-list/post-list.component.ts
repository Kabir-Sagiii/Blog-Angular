import { Component, OnInit } from '@angular/core';
import * as userReducer from '../../../users/reducers/user.reducer';
import * as postActions from '../../../posts/actions/post.actions';
import * as postReducer from '../../../posts/reducers/post.reducer';
import {select, Store} from "@ngrx/store";
import {State} from "../../../reducers";
import {IUser} from "../../../users/models/IUser";
import {IPost} from "../../models/IPost";

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  public text:string = '';
  public user:IUser = {} as IUser;
  public posts:IPost[] = [] as IPost[];
  public loading:boolean;
  constructor(private store:Store<State>) { }

  ngOnInit(): void {
    // load All Posts
    this.store.dispatch(postActions.loadAllPosts());

    // get user info from NgRx Store
    this.store.pipe(select(userReducer.userFeatureKey)).subscribe((state) => {
      this.user = state.user;
    });

    // get all post Info from NgRx Store
    this.store.pipe(select(postReducer.postFeatureKey)).subscribe((state) => {
      this.posts = state.posts;
      this.loading = state.loading;
    });
  }

  public hasUser(){
    return Object.keys(this.user).length > 0;
  }

  public isAuthUser(post:IPost){
    return this.user._id.toString() === post.user;
  }

  public submitCreatePost(){
    this.store.dispatch(postActions.createPost({text : this.text}));
    this.text = '';
  }

  public clickDeletePost(postId){
    this.store.dispatch(postActions.deletePost({postId : postId}));
  }

  public clickLikePost(postId){
    this.store.dispatch(postActions.likePost({postId : postId}));
  }

  public clickUnlikePost(postId){
    this.store.dispatch(postActions.unlikePost({postId : postId}));
  }

}
