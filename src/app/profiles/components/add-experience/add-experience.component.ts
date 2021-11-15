import { Component, OnInit } from '@angular/core';
import {Experience, IProfile} from "../../models/IProfile";
import {Store} from "@ngrx/store";
import {State} from "../../../reducers";
import * as profileActions from '../../actions/profile.actions';

@Component({
  selector: 'app-add-experience',
  templateUrl: './add-experience.component.html',
  styleUrls: ['./add-experience.component.css']
})
export class AddExperienceComponent implements OnInit {

  public experience:Experience = {} as Experience;

  constructor(private store:Store<State>) { }

  ngOnInit(): void {
  }

  public submitUpdateExperience(){
    this.store.dispatch(profileActions.addExperience({experience : this.experience}));
  }

}
