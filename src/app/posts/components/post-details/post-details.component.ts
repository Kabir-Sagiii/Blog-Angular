import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap} from "@angular/router";
import {select, Store} from "@ngrx/store";
import {State} from "../../../reducers";
import * as postActions from '../../actions/post.actions';
import * as postReducer from '../../reducers/post.reducer';
import * as userReducer from '../../../users/reducers/user.reducer';
import {IComment, IPost} from "../../models/IPost";
import {IUser} from "../../../users/models/IUser";

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  public text:string = '';
  public postId:string = '';
  public user:IUser = {} as IUser;
  public selectedPost:IPost = {} as IPost;
  public loading:boolean;
  constructor(private store:Store<State>,
              private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    // get user info from NgRx Store
    this.store.pipe(select(userReducer.userFeatureKey)).subscribe((state) => {
      this.user = state.user;
    });

    // get post id from url
    this.activatedRoute.paramMap.subscribe((param:ParamMap) => {
      this.postId = param.get('postId');
    });

    // load post from server
    this.store.dispatch(postActions.loadPost({postId : this.postId}));

    // Get the Post Info from NgRx Store
    this.store.pipe(select(postReducer.postFeatureKey)).subscribe((state) => {
      this.selectedPost = state.selectedPost;
      this.loading = state.loading;
    });
  }

  public hasPost(){
    return Object.keys(this.selectedPost).length > 0;
  }

  public hasUser(){
    return Object.keys(this.user).length > 0;
  }

  public submitCreateComment(){
    this.store.dispatch(postActions.createComment({text : this.text , postId : this.postId}))
    this.text = "";
  }

  public isAuthUser(comment : IComment){
    return this.user._id === comment.user.toString()
  }

  public clickDeleteComment(commentId){
    this.store.dispatch(postActions.deleteComment({postId : this.selectedPost._id , commentId : commentId}));
  }

}
