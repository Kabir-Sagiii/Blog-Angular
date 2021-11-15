import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { environment } from "../../../environments/environment";
import {catchError, retry} from "rxjs/operators";
import {ErrorHandlerUtil} from "../../root/util/ErrorHandlerUtil";
import {Observable} from "rxjs";
import {IPost} from "../models/IPost";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient:HttpClient) { }

  // load all Posts
  public loadAllPosts():Observable<{posts : IPost[]}>{
    let dataURL : string = `${environment.apiURL}/api/posts`;
    return this.httpClient.get<{posts : IPost[]}>(dataURL).pipe(
      retry(1),
      catchError(ErrorHandlerUtil.handleError)
    )
  }

  // load Post
  public loadPost(postId:string):Observable<{post : IPost}>{
    let dataURL : string = `${environment.apiURL}/api/posts/${postId}`;
    return this.httpClient.get<{post : IPost}>(dataURL).pipe(
      retry(1),
      catchError(ErrorHandlerUtil.handleError)
    )
  }

  // Create a Post
  public createPost(text:string):Observable<{post : IPost}>{
    let dataURL : string = `${environment.apiURL}/api/posts`;
    return this.httpClient.post<{post : IPost}>(dataURL, {text : text}).pipe(
      retry(1),
      catchError(ErrorHandlerUtil.handleError)
    )
  }

  // Create a Comment
  public createComment(text:string, postId : string):Observable<{post : IPost}>{
    let dataURL : string = `${environment.apiURL}/api/posts/comment/${postId}`;
    return this.httpClient.post<{post : IPost}>(dataURL, {text : text}).pipe(
      retry(1),
      catchError(ErrorHandlerUtil.handleError)
    )
  }

  // Delete Comment
  public deleteComment(postId : string, commentId:string):Observable<{post : IPost}>{
    let dataURL : string = `${environment.apiURL}/api/posts/comment/${postId}/${commentId}`;
    return this.httpClient.delete<{post : IPost}>(dataURL).pipe(
      retry(1),
      catchError(ErrorHandlerUtil.handleError)
    )
  }

  // Delete Post
  public deletePost(postId : string):Observable<{post : IPost}>{
    let dataURL : string = `${environment.apiURL}/api/posts/${postId}`;
    return this.httpClient.delete<{post : IPost}>(dataURL).pipe(
      retry(1),
      catchError(ErrorHandlerUtil.handleError)
    )
  }

  // Like Post
  public likePost(postId : string):Observable<{post : IPost}>{
    let dataURL : string = `${environment.apiURL}/api/posts/like/${postId}`;
    return this.httpClient.put<{post : IPost}>(dataURL, postId).pipe(
      retry(1),
      catchError(ErrorHandlerUtil.handleError)
    )
  }

  // Un-Like Post
  public unlikePost(postId : string):Observable<{post : IPost}>{
    let dataURL : string = `${environment.apiURL}/api/posts/unlike/${postId}`;
    return this.httpClient.put<{post : IPost}>(dataURL, postId).pipe(
      retry(1),
      catchError(ErrorHandlerUtil.handleError)
    )
  }
}
