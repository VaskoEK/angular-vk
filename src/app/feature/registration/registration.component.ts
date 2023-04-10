import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { HttpService } from 'src/app/core/services/http/http.service';
import { RegResponse } from 'src/app/core/types/api/reg-api.type';
import { RegAuth } from 'src/app/core/types/auth/reg-auth.type';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {


  regForm: FormGroup;

  value1 = '';
  value2 = '';
  value3 = '';

  checked = false;

  constructor(private router: Router, private httpService: HttpService, private authService: AuthService) {
    this.regForm = new FormGroup({
      reg_firstname: new FormControl(null, [Validators.required]),
      reg_lastName: new FormControl(null, [Validators.required]),
      reg_age: new FormControl(null, [Validators.required]),
      reg_isCompany: new FormControl(null)
    });
  }

  registrate() {
    if (this.regForm.valid) {
      const formData: RegAuth = this.regForm.value;  // ezt posztoljuk
      console.log(formData);

      // this.httpService.postReg({firstName: formData.reg_firstname, lastName: formData.reg_lastName, age: formData.reg_age}).subscribe(res=>
      //   {console.log(res)});

      this.authService.reg(formData).subscribe((res:RegResponse)=>{
        if(res.id) {
          // console.log(res.lastName, res.id);
          this.router.navigate(['login']);
        }
        else{
          alert("HIBA!");
        }
      });
    }
  }

}
