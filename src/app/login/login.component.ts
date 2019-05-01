import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, NgForm, Validators } from '@angular/forms';
import { formControlBinding } from '@angular/forms/src/directives/reactive_directives/form_control_directive';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  signUpForm: FormGroup
  firstName: string = ''
  lastName: string = ''
  email: string = ''
  password: string = ''

  constructor(private frmBuilder: FormBuilder) {
    this.signUpForm = frmBuilder.group({
      fName: ['',Validators.compose([Validators.required, Validators.maxLength(15),Validators.minLength(5)])],
      lName:['', Validators.compose([Validators.required, Validators.maxLength(15), Validators.minLength(5)])],
      email: ['',Validators.compose([Validators.required, Validators.email])],
      password:['',Validators.compose([Validators.required])]
     
    })
   }
  get signUp(){
    return this.signUpForm.controls
  }


  ngOnInit() {    
  }
  PostFormDate(signUpFormData: NgForm){
    console.log('Sign Up form data: ', signUpFormData.controls)
  }
}

/*  fName: new FormControl(),
      lName: new FormControl(),
      email: new FormControl(),
      password: new FormControl() */