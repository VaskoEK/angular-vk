import { Injectable } from '@angular/core';
import { LoginAuth } from '../../types/auth/login-auth.type';
import { HttpService } from '../http/http.service';
import { LoginApi, LoginResponse } from '../../types/api/login-api.type';
import { Observable } from 'rxjs';
import { RegAuth } from '../../types/auth/reg-auth.type';
import { RegApi, RegResponse } from '../../types/api/reg-api.type';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isCompany: boolean = false;

  constructor(private httpService: HttpService) { }

  login(loginData: LoginAuth): Observable<LoginResponse> {
    this.isCompany = loginData.login_isCompany;
    return this.httpService.postLogin(this.mapLoginDataToLoginApiData(loginData))
  }

  initUser(userData: LoginResponse): void {
    localStorage.setItem("token", userData.token);  // localStorage: böngésző memójába ment el kulcs-érték párokkal stringeket
  }

  isLoggedIn(): string | null {  // ha sikerült a bej., visszakapjuk a tokent
    return localStorage.getItem("token");
  }

  private mapLoginDataToLoginApiData(loginData: LoginAuth): LoginApi {
    return {
      username: loginData.login_username,
      password: loginData.login_password
    }
  }




  reg(regData:RegAuth): Observable<RegResponse> {
    return this.httpService.postReg(this.mapRegDataToRegApiData(regData))
  }

  private mapRegDataToRegApiData(regData: RegAuth): RegApi {
    return {
      firstName: regData.reg_firstname,
      lastName: regData.reg_lastName,
      age: regData.reg_age
    }
  }

}
