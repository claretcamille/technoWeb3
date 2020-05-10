import { Component, OnInit } from '@angular/core';
import {NgForm, FormGroup, FormBuilder, Validators} from '@angular/forms';
import { InscriptionService } from 'src/app/services/inscription.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css'],
  providers: [InscriptionService]
})
export class InscriptionComponent implements OnInit {

  inscriptionForm : FormGroup;
  errorMessage: string;

  constructor(
    private inscription : InscriptionService,
    private formBuilder: FormBuilder,
    private route: Router
    ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.inscriptionForm = this.formBuilder.group({
      mail:  ['', [Validators.required, Validators.email]],
      password:  ['', [Validators.required, Validators.pattern(/[0-9a-zA-Z]{6,}/)]]
    });
  }

  onSubmitForm(){
    const formValue = this.inscriptionForm.value;
    this.inscription.createNewUser(formValue['mail'], formValue['password']).then(
      () => {
        this.route.navigate(['new']);
      },
      (error) => {
        this.errorMessage = error;
      }
    );
    
  }

}
