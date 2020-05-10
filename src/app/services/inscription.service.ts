import { Subject } from 'rxjs';
import { InscriptionModel } from '../models/inscription.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable()

export class InscriptionService {

    private inscription : InscriptionModel;

    inscriptionSubject = new Subject<InscriptionModel[]>();

    constructor(private httpClient : HttpClient){}

    createNewUser(email: string, password: string) {
        return new Promise(
          (resolve, reject) => {
            firebase.auth().createUserWithEmailAndPassword(email, password).then(
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

}