import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';
import { Subject, takeUntil } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { HttpService } from 'src/app/core/services/http/http.service';
import { LoginResponse } from 'src/app/core/types/api/login-api.type';
import { LoginAuth } from 'src/app/core/types/auth/login-auth.type';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm: FormGroup;

  @ViewChild('mySwal')
  public readonly mySwal!: SwalComponent;

  private unsubscribe = new Subject<void>();

  value1 = 'kminchelle';
  value2 = '0lelplR';

  checked = false;

  constructor(private authService: AuthService, private router: Router, private actRoute: ActivatedRoute) {
    this.loginForm = new FormGroup({
      login_username: new FormControl(null, [Validators.required]),
      login_password: new FormControl(null, [Validators.required]),
      login_isCompany: new FormControl(null)
    });
  }

  ngOnDestroy(): void {
    console.log("login page destroy");
    this.authService.resetErrorCount();
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  ngAfterViewInit(): void {

    this.authService.authErrorCount$.pipe(takeUntil(this.unsubscribe)).subscribe((errorCount: number) => {
      if(errorCount > 0) {

        this.mySwal.fire();
      }
    })
  }

  login() {
    if (this.loginForm.valid) {
      // console.log(this.loginForm.value);
      const formData: LoginAuth = this.loginForm.value;  // LoginAuth: magunknál a hitelesítéshez használt adatok elnevezései, ezt posztoljuk
   
      
      this.authService.login(formData).subscribe((res:LoginResponse)=>{  // amikor a this.authService.reg(formData) lefut, akkor lép életbe a subscribe utáni rész
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



// export class LoginComponent {

//   loginForm: FormGroup;

//   constructor(private httpService: HttpService) {
//     this.loginForm = new FormGroup({
//       login_username: new FormControl(null, [Validators.required]),
//       login_password: new FormControl(null, [Validators.required])
//     });
//   }

//   login() {
//     if (this.loginForm.valid) {
//       const formData: LoginAuth = this.loginForm.value;  // LoginAuth: magunknál a hitelesítéshez használt adatok elnevezései, ezt posztoljuk
//       // küldés:
//       this.httpService.postLogin({username: formData.login_username, password: formData.login_password}).subscribe(res=>{console.log(res);});
//     }
//   }
// }

