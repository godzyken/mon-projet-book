import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
    const config = {

      apiKey: 'AIzaSyDr6mA16VZcn9UpYgZ4QWyN1Qw2YZrxKn4',
      authDomain: 'mon-project-book.firebaseapp.com',
      databaseURL: 'https://mon-project-book.firebaseio.com',
      projectId: 'mon-project-book',
      storageBucket: 'mon-project-book.appspot.com',
      messagingSenderId: '776598945875'
    };
    firebase.initializeApp(config);
  }
}
