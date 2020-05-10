import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'socialNetworkProjet';

  constructor(){
    const firebaseConfig = {
      apiKey: "AIzaSyCnEvloAxNcOrABqgjYe-JXJMkAcsKmMi4",
      authDomain: "databaseapp-14032.firebaseapp.com",
      databaseURL: "https://databaseapp-14032.firebaseio.com",
      projectId: "databaseapp-14032",
      storageBucket: "databaseapp-14032.appspot.com",
      messagingSenderId: "539261051195",
      appId: "1:539261051195:web:799f4dd92b18602187d71e",
      measurementId: "G-2QTM34NBMV"
    }
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
    const db = firebase.firestore(); // BDD
  }
}
