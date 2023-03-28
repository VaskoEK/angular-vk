import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() {

   }


   getUser2(userId:number):Promise<any>{
    return new Promise((resolve, reject)=>{
      setTimeout(()=>{
        resolve({
          userId: userId,
          userName: 'Adam'
        });
      }, 2000);
    });

   }



  getUser(userId:number, callback:any){
    console.log("get user");
    setTimeout(()=>{
      callback({
        userId: userId,
        userName: 'Adam'
      })
    }, 1000);
  }

  getUsersPermissons(user:any, callback:any){
    console.log("permision")
    setTimeout(()=>{
      callback("Admin és user");
    }, 2000)
  }


}
