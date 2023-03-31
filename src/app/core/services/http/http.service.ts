import { Injectable } from '@angular/core';
import { LoginApi } from '../../types/api/login-api.type';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  postLogin(dataToPost: LoginApi) {
    return this.http.post('', dataToPost);
  }
}
