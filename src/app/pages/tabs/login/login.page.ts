import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  isSignUpMode: boolean = false;
  
  signInForm: FormGroup = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });
  signUpForm: FormGroup = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
    email: ['', Validators.required],
  });
 
  constructor
  (
    private formBuilder: FormBuilder,
    private router: Router,
    // private messageSvc: MessageService,
  ) {}

  ngOnInit(): void {

  }

  toggleSignUpMode() {
    this.isSignUpMode = !this.isSignUpMode;
  }

  onSignIn() {
    this.router.navigate(['/tabs/home']);
  }

  onSignUp() {
    this.router.navigate(['/tabs/home']);
  }


}
