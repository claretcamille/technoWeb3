import { ConnectModel } from '../models/connect.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as firebase from 'firebase';

@Injectable()

export class ConnectService {
    private connects : ConnectModel;

    constructor(private httpClient : HttpClient){}

    signInUser(email: string, password: string) {
        return new Promise(
          (resolve, reject) => {
            firebase.auth().signInWithEmailAndPassword(email, password).then(
              () => {
                resolve();
              },
              (error) => {
                reject(error);
              }
            );
          }
        );
    }

    signOutUser() {
        firebase.auth().signOut();
    }
    
}