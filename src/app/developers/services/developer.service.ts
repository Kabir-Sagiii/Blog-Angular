import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IUser} from "../../users/models/IUser";
import {environment} from "../../../environments/environment";
import {catchError, retry} from "rxjs/operators";
import {ErrorHandlerUtil} from "../../root/util/ErrorHandlerUtil";
import {IDeveloper} from "../models/IDeveloper";

@Injectable({
  providedIn: 'root'
})
export class DeveloperService {

  constructor(private httpClient:HttpClient) { }

  // load all Developers
  public loadDevelopers():Observable<{developers : IDeveloper[]}>{
    let dataURL = `${environment.apiURL}/api/profiles`;
    return this.httpClient.get<{developers : IDeveloper[]}>(dataURL).pipe(
      retry(1),
      catchError(ErrorHandlerUtil.handleError)
    )
  }

  // load a Developer
  public loadDeveloper(developerId):Observable<{developer : IDeveloper}>{
    let dataURL = `${environment.apiURL}/api/profiles/users/${developerId}`;
    return this.httpClient.get<{developer : IDeveloper}>(dataURL).pipe(
      retry(1),
      catchError(ErrorHandlerUtil.handleError)
    )
  }

}
