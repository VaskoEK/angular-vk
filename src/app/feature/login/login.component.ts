import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { LoginResponse } from 'src/app/core/types/api/login-api.type';
import { LoginAuth } from 'src/app/core/types/auth/login-auth.type';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm: FormGroup;

  constructor(private authService: AuthService, private router: Router) {
    this.loginForm = new FormGroup({
      login_username: new FormControl(null, [Validators.required]),
      login_password: new FormControl(null, [Validators.required]),
      login_isCompany: new FormControl(null)
    });
  }

  login() {
    if (this.loginForm.valid) {
      // console.log(this.loginForm.value);
      const formData: LoginAuth = this.loginForm.value;
      // console.log(formData);
      
      this.authService.login(formData).subscribe((res:LoginResponse)=>{
        if(res.id) {  // ha van egy id az api válaszában
          this.authService.initUser(res);
          this.router.navigate(['posts']);
        }
        else{
          alert("HIBA!");
        }
      });
    }
  }
}

