import { Component, OnInit } from '@angular/core';
import * as profileActions from '../../actions/profile.actions';
import * as profileReducer from '../../reducers/profile.reducer';
import {IProfile, Social} from "../../models/IProfile";
import {select, Store} from "@ngrx/store";
import {State} from "../../../reducers";

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  public profile:IProfile = {} as IProfile;
  public social:Social = {} as Social;
  public loading:boolean = true;
  constructor(private store:Store<State>) { }

  ngOnInit(): void {
    this.store.dispatch(profileActions.loadProfile());
    this.store.pipe(select(profileReducer.profileFeatureKey)).subscribe((state) => {
      this.profile = state.profile;
      this.social = this.profile.social;
      this.loading = state.loading;
    });
  }

  public hasProfile(){
    return Object.keys(this.profile).length > 0;
  }

  public changeProfile(event){
    this.profile = {
      ...this.profile,
      [event.target.name] : event.target.value
    }
  }

  public changeProfileSocial(event){
    this.social = {
      ...this.social,
      [event.target.name] : event.target.value
    };
  }

  public submitUpdateProfile(){
    let profile:IProfile = {
      ...this.profile,
      ...this.social
    };
    this.store.dispatch(profileActions.updateProfile({profile : profile}));
  }

}
