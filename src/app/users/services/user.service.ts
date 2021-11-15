import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { environment } from "../../../environments/environment";
import {catchError, retry} from "rxjs/operators";
import {Observable} from "rxjs";
import {ErrorHandlerUtil} from "../../root/util/ErrorHandlerUtil";
import {IUser} from "../models/IUser";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient:HttpClient) { }

  // register
  public registerUser(user:IUser):Observable<{msg : string}>{
    let dataURL = `${environment.apiURL}/api/users/register`;
    return this.httpClient.post<{msg : string}>(dataURL, user).pipe(
      retry(1),
      catchError(ErrorHandlerUtil.handleError)
    )
  }

  // login
  public loginUser(user:IUser):Observable<{msg : string , token : string}>{
    let dataURL = `${environment.apiURL}/api/users/login`;
    return this.httpClient.post<{msg : string, token : string}>(dataURL, user).pipe(
      retry(1),
      catchError(ErrorHandlerUtil.handleError)
    )
  }

  // get User Info
  public getUserInfo():Observable<{user : IUser}>{
    let dataURL = `${environment.apiURL}/api/users`;
    return this.httpClient.get<{user : IUser}>(dataURL).pipe(
      retry(1),
      catchError(ErrorHandlerUtil.handleError)
    )
  }

  // isLoggedIn
  public isLoggedIn():boolean{
    return !!localStorage.getItem('angular-social-token');
  }

  // get Token
  public getToken():string{
    return localStorage.getItem('angular-social-token');
  }

}
