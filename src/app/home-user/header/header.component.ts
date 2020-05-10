import { Component, OnInit } from '@angular/core';
import { ConnectService } from 'src/app/services/connect.service';
import * as firebase from 'firebase';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isAuth: boolean;

  constructor(
    private connectService : ConnectService,
    private route : Router
  ) { }

  ngOnInit(){
    firebase.auth().onAuthStateChanged(
      (user) => {
        if(user) {
          this.isAuth = true;
        } else {
          this.isAuth = false;
          this.route.navigate(['../']);
        }
      }
    );
  }

  onSignOut() {
    this.connectService.signOutUser();
  }

}
