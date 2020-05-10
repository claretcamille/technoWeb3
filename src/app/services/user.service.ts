import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { UserModel } from '../models/user.model';

@Injectable()

export class UserService {
    private user: UserModel;

    constructor(private httpClient : HttpClient){}

    uploadFile(file: File) {
        return new Promise(
          (resolve, reject) => {
            const profilePicture = Date.now().toString();
            const upload = firebase.storage().ref()
              .child('images/' + profilePicture + file.name).put(file);
            upload.on(firebase.storage.TaskEvent.STATE_CHANGED,
              () => {
                console.log('Chargement…');
              },
              (error) => {
                console.log('Erreur de chargement ! : ' + error);
                reject();
              },
              () => {
                resolve(upload.snapshot.ref.getDownloadURL());
              }
            );
          }
        );
    }

    saveInformationUser(){
      
    }

}