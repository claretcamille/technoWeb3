import { Injectable } from '@angular/core';
import users from  '../jsons/users.json';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  connect: boolean;
  error: string;
  login: any;

  constructor() {
    console.log(users);
    this.connect = false;
    this.error = "Error to id or password";
  }

  loginApp( id: string,  pw: string){

    for (var i = 0; i < users.length; i++) {
      for (var user in users) {
        if(users[user].mail == id){
          if(users[user].pw == pw){
            this.connect = true;
            this.login = users[user]
          }
        }
      }
    }
    return this.login
  }

  getError(){
    return this.error;
  }
}
