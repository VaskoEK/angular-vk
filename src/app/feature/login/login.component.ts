import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm: FormGroup;

  constructor() {
    this.loginForm = new FormGroup({
      login_username: new FormControl(null, [Validators.required]),
      login_password: new FormControl(null, [Validators.required])
    });
  }

  login() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      
    }
  }
}
