import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IDeveloper} from "../../developers/models/IDeveloper";
import {environment} from "../../../environments/environment";
import {catchError, retry} from "rxjs/operators";
import {ErrorHandlerUtil} from "../../root/util/ErrorHandlerUtil";
import {Education, Experience, IProfile} from "../models/IProfile";

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private httpClient:HttpClient) { }

  // load a Profile
  public loadProfile():Observable<{profile : IProfile}>{
    let dataURL = `${environment.apiURL}/api/profiles/me`;
    return this.httpClient.get<{profile : IProfile}>(dataURL).pipe(
      retry(1),
      catchError(ErrorHandlerUtil.handleError)
    )
  }

  // Delete Experience
  public deleteExperience(experienceId):Observable<{profile : IProfile}>{
    let dataURL = `${environment.apiURL}/api/profiles/experience/${experienceId}`;
    return this.httpClient.delete<{profile : IProfile}>(dataURL).pipe(
      retry(1),
      catchError(ErrorHandlerUtil.handleError)
    )
  }

  // Delete Education
  public deleteEducation(educationId):Observable<{profile : IProfile}>{
    let dataURL = `${environment.apiURL}/api/profiles/education/${educationId}`;
    return this.httpClient.delete<{profile : IProfile}>(dataURL).pipe(
      retry(1),
      catchError(ErrorHandlerUtil.handleError)
    )
  }

  // Update Profile
  public updateProfile(profile:IProfile):Observable<{profile : IProfile}>{
    let dataURL = `${environment.apiURL}/api/profiles/`;
    return this.httpClient.put<{profile : IProfile}>(dataURL , profile).pipe(
      retry(1),
      catchError(ErrorHandlerUtil.handleError)
    )
  }

  // add Experience
  public addExperience(experience:Experience):Observable<{profile : IProfile}>{
    let dataURL = `${environment.apiURL}/api/profiles/experience`;
    return this.httpClient.put<{profile : IProfile}>(dataURL , experience).pipe(
      retry(1),
      catchError(ErrorHandlerUtil.handleError)
    )
  }

  // add Education
  public addEducation(education:Education):Observable<{profile : IProfile}>{
    let dataURL = `${environment.apiURL}/api/profiles/education`;
    return this.httpClient.put<{profile : IProfile}>(dataURL , education).pipe(
      retry(1),
      catchError(ErrorHandlerUtil.handleError)
    )
  }

  // Create Profile
  public createProfile(profile:IProfile):Observable<{profile : IProfile}>{
    let dataURL = `${environment.apiURL}/api/profiles/`;
    return this.httpClient.post<{profile : IProfile}>(dataURL , profile).pipe(
      retry(1),
      catchError(ErrorHandlerUtil.handleError)
    )
  }
}
