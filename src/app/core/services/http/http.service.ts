import { Injectable } from '@angular/core';
import { LoginApi, LoginResponse } from '../../types/api/login-api.type';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { RegApi, RegResponse } from '../../types/api/reg-api.type';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  // postLogin(dataToPost: LoginApi) {
  //   return this.http.post(environment.api.apiBaseUrl + environment.api.login, dataToPost);
  // }
  // VAGY A KÖV. 2 METHODDAL:

  postLogin(dataToPost: LoginApi): Observable<LoginResponse> {  // LoginApi típusú adatokat kell felküldeni
    return this.postRequest(environment.api.login, dataToPost);
  }

  private postRequest(path: string, dataToPost: any): Observable<any> {  // environment.api.apiBaseUrl rögz., ezt bővíti ki a postLogin
    return this.http.post(environment.api.apiBaseUrl + path, dataToPost)
  }






  postReg(dataToPost: RegApi): Observable<RegResponse> {
    return this.postRequest(environment.api.registration, dataToPost);
  }

}
