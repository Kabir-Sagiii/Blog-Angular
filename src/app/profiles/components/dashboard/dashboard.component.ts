import { Component, OnInit } from '@angular/core';
import * as userReducer from '../../../users/reducers/user.reducer';
import {select, Store} from "@ngrx/store";
import {State} from "../../../reducers";
import {IUser} from "../../../users/models/IUser";
import * as profileActions from '../../actions/profile.actions';
import * as profileReducer from '../../reducers/profile.reducer';
import {IProfile} from "../../models/IProfile";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public user:IUser = {} as IUser;
  public profile:IProfile = {} as IProfile;
  public loading:boolean=true;
  constructor(private store:Store<State>) { }

  ngOnInit(): void {
    this.store.dispatch(profileActions.loadProfile());

    // get userInfo from NgRX Store
    this.store.pipe(select(userReducer.userFeatureKey)).subscribe((state) => {
      this.user = state.user;
    });

    // get profile Info from NgRX Store
    this.store.pipe(select(profileReducer.profileFeatureKey)).subscribe((state) => {
      this.profile = state.profile;
      this.loading = state.loading;
    });
  }

  public hasProfile(){
    return Object.keys(this.profile).length > 0;
  }

  public clickDeleteExperience(experienceId){
    this.store.dispatch(profileActions.deleteExperience({experienceId : experienceId}));
  }

  public clickDeleteEducation(educationId){
    this.store.dispatch(profileActions.deleteEducation({educationId : educationId}));
  }
}
