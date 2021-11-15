import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap} from "@angular/router";
import {select, Store} from "@ngrx/store";
import {State} from "../../../reducers";
import {IDeveloper} from "../../models/IDeveloper";
import * as developerActions from '../../actions/developer.actions';
import * as developerReducer from '../../reducers/developer.reducer';

@Component({
  selector: 'app-developer-details',
  templateUrl: './developer-details.component.html',
  styleUrls: ['./developer-details.component.css']
})
export class DeveloperDetailsComponent implements OnInit {

  public developerId:string;
  public developer:IDeveloper = {} as IDeveloper;
  public loading:boolean;
  constructor(private activatedRoute : ActivatedRoute,
              private store:Store<State>) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param:ParamMap) => {
      this.developerId = param.get('developer_id');
    });
    this.store.dispatch(developerActions.loadDeveloper({developerId : this.developerId}));
    this.store.pipe(select(developerReducer.developerFeatureKey)).subscribe((state) => {
      this.developer = state.developer;
      this.loading = state.loading;
    });
  }

  public hasDeveloper(){
    return Object.keys(this.developer).length > 0;
  }

}
