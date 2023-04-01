import { Injectable } from '@angular/core';
import { LoginApi, LoginResponse } from '../../types/api/login-api.type';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

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

  private postRequest(path: string, dataToPost: any): Observable<any> {
    return this.http.post(environment.api.apiBaseUrl + path, dataToPost)
  }
}
