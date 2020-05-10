import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-new-user',
  templateUrl: './form-new-user.component.html',
  styleUrls: ['./form-new-user.component.css']
})
export class FormNewUserComponent implements OnInit {

  newUserForm : FormGroup;
  errorMessage: string;
  fileIsUploading = false;
  fileUrl: string;
  fileUploaded = false;
  
  constructor(
    private userService : UserService,
    private formBulder : FormBuilder,
    private route : Router
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.newUserForm = this.formBulder.group({
      pseudo : ['', Validators.required],
      profilePicture : [''],
      phone : [''], 
      about : [''] 
    });
  }

  onSubmitForm(){
    const formValue = this.newUserForm.value;

  }

  onUploadFile(file: File) {
    this.fileIsUploading = true;
    this.userService.uploadFile(file).then(
      (url: string) => {
        this.fileUrl = url;
        this.fileIsUploading = false;
        this.fileUploaded = true;
      }
    );
  }

  detectFiles(event) {
    this.onUploadFile(event.target.files[0]);
  }
}


