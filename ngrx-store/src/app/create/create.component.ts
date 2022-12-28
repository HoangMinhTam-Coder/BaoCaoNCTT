import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './../app.state';
import { Tutorial } from './../models/tutorial.model'
import * as TutorialActions from './../actions/tutorial.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit{
  constructor(private store: Store<AppState>) {}

  addTutorial(name: string, url: string) {
    this.store.dispatch(TutorialActions.ADD_TUTORIAL({payload: {name: name, url: url}}) )
  }

  ngOnInit() {
  }
}
