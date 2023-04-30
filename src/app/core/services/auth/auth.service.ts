import { Injectable } from '@angular/core';
import { LoginAuth } from '../../types/auth/login-auth.type';
import { HttpService } from '../http/http.service';
import { LoginApi, LoginResponse } from '../../types/api/login-api.type';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { RegAuth } from '../../types/auth/reg-auth.type';
import { RegApi, RegResponse } from '../../types/api/reg-api.type';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isCompany: boolean = false;
  private authErrorCount = new BehaviorSubject<number>(0);
  authErrorCount$ = this.authErrorCount.asObservable();

  private loggedIn = new BehaviorSubject<boolean>(false);
  loggedIn$ = this.loggedIn.asObservable();


  constructor(private httpService: HttpService) { }

  checkLoggedIn() {
    if(this.isLoggedIn()) {
      this.loggedIn.next(true);
    }
    else {
      this.loggedIn.next(false);
    }
  }

  login(loginData: LoginAuth): Observable<LoginResponse> {
    this.isCompany = loginData.login_isCompany;
    this.loggedIn.next(true);
    return this.httpService.postLogin(this.mapLoginDataToLoginApiData(loginData))
  }

  logout() {
    localStorage.removeItem('token');  // törli a tokent (Firefox: Tároló - Helyi tárolóban)
    this.loggedIn.next(false);
  }

  increaseErrorCount(): void {
    let currentValue = this.authErrorCount.value;
    this.authErrorCount.next(++currentValue);
  }

  resetErrorCount(): void {
    this.authErrorCount.next(0);
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
