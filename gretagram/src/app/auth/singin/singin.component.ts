import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/auth.service';
import { AuthGuardService } from 'src/app/auth-guard.service';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-singin',
  templateUrl: './singin.component.html',
  styleUrls: ['./singin.component.css']
})
export class SinginComponent implements OnInit {

  authForm : FormGroup;
  errorMessage : string;
  user: any;

  constructor(
    private formBuilder : FormBuilder,
    private auth: AuthService,
    private authGuard: AuthGuardService,
    private val: AppComponent
  ) { }

  ngOnInit() {
    this.initForm();
  }

  initForm(){
    this.authForm = this.formBuilder.group({
      mail:  ['', [Validators.required, Validators.email]],
      password:  ['', [Validators.required, Validators.pattern(/[0-9a-zA-Z]{6,}/)]]
    });
  }

  onSubmitForm(){
    const formValue = this.authForm.value;
    console.log(formValue);
    this.user = this.auth.loginApp(formValue['mail'], formValue['password']);
    console.log(this.user);
    this.authGuard.changeGuard(this.user.id);
    this.val.isAuth = this.authGuard.isConnected;
  }

}
