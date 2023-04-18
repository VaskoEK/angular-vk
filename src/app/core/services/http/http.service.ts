import { Injectable } from '@angular/core';
import { LoginApi, LoginResponse } from '../../types/api/login-api.type';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, catchError, throwError } from 'rxjs';
import { RegApi, RegResponse } from '../../types/api/reg-api.type';
import { Post, PostResponse } from '../../types/post/post.type';
import { Product, ProductResponse } from '../../types/product/product.type';

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

  postReg(dataToPost: RegApi): Observable<RegResponse> {
    return this.postRequest(environment.api.registration, dataToPost);
  }

  getAllPosts(): Observable<PostResponse> {
    return this.getRequest(environment.api.posts).pipe(
      catchError(
        (err) => {

          console.log("err captured in GET ALL POSTS service");
          console.log(err);
          
          // return throwError(() => new Error(err));
          return throwError(() => "HIBA");
        }
      )
    );
  }

  getSinglePost(id: number): Observable<Post> {
    return this.getRequest(environment.api.post + id);
  }




  getAllProducts(): Observable<ProductResponse> {
    return this.getRequest(environment.api.products).pipe(
      catchError(
        (err) => {
          console.log(err);
          return throwError(() => "HIBA");
        }
      )
    );
  }

  getSingleProduct(id: number): Observable<Product> {
    return this.getRequest(environment.api.product + id);
  }



  private getRequest(path: string): Observable<any> {
    return this.http.get(environment.api.apiBaseUrl + path).pipe(
      catchError((err) => {

        console.log("err captured in service");
        console.log(err);
        
        // return throwError(() => new Error(err));
        return throwError(() => "HIBA");
      })
    );
  }

  private postRequest(path: string, dataToPost: any): Observable<any> {  // environment.api.apiBaseUrl rögz., ezt bővíti ki a postLogin; itt még akármilyen típusú Observable lehet, ami létrejön, fentebb kapnak típust
    return this.http.post(environment.api.apiBaseUrl + path, dataToPost)
  }

}
