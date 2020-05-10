import { Component, OnInit } from '@angular/core';
import {NgForm, FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { ConnectService } from 'src/app/services/connect.service';

@Component({
  selector: 'app-connect',
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.css'],
})
export class ConnectComponent implements OnInit {

  //connectSubject = new Subject<any[]>();

  connectForm : FormGroup;
  errorMessage : string;

  constructor(
    private connectService : ConnectService,
    private formBuilder: FormBuilder,
    private route : Router
    ){}



  ngOnInit(): void {

    this.initForm();
    
  }

  initForm(){
    this.connectForm = this.formBuilder.group({
      mail:  ['', [Validators.required, Validators.email]],
      password:  ['', [Validators.required, Validators.pattern(/[0-9a-zA-Z]{6,}/)]]
    });
  }

  onSubmitForm(){
    const formValue = this.connectForm.value;
    this.connectService.signInUser(formValue['mail'], formValue['password']).then(
      () => {
        this.route.navigate(['home']);
      },
      (error) => {
        this.errorMessage = error;
      }
    );
  }

  

}
