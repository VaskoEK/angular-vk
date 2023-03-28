import { Component, SimpleChanges } from '@angular/core';
import { SlideServiceService } from './core/services/slide/slide-service.service';
import { UserService } from './core/services/user/user.service';
import { Slide } from './core/types/slide/slide.type';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'test';
  selectedIndex:number|null = null;
  color:string = "green";
  color2:string = "blue";


  userId: number = 101;

  constructor(public readonly slideService: SlideServiceService, private readonly userSerivce: UserService){
    /*this.userSerivce.getUser(this.userId,(user:any)=>{
      this.userSerivce.getUsersPermissons(user,(permissions:any )=>{

        console.log("lefutott");
        console.log(permissions);
      })
    });*/


    this.userSerivce.getUser2(this.userId).then((res:any)=>{
      console.log(res);
    })
  }


 async getSelectedSlide(index:number):Promise<void>{
    this.selectedIndex = index;
    console.log(this.selectedIndex);
    const user = await this.userSerivce.getUser2(this.userId);
    console.log(user);

  }

}
