import { Injectable } from '@angular/core';
import { Slide } from '../../types/slide/slide.type';

@Injectable({
  providedIn: 'root'
})
export class SlideServiceService {

  private currentIndex:number = 0;
  private slides:Slide[] = [
    {
      title:"Francia város",
      url:"https://i0.wp.com/handluggageonly.co.uk/wp-content/uploads/2017/12/Menton-France-2.jpg?w=1600&ssl=1",
      desc:"Francia________________orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    },
    {
      title:"Shutterstock foto",
      url:"https://www.ourescapeclause.com/wp-content/uploads/2020/05/shutterstock_134874083-768x512.jpg",
      desc:"ShutterstockT________________orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",

    },
    {
      title:"Adobe Stock Foto",
      url:"https://www.studentuniverse.com/blog/wp-content/uploads/2021/06/AdobeStock_296153501-1350x900.jpeg",
      desc:"Adobe________________orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",

    },
    {
      title:"Budapest",
      url:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Parliament_of_Hungary_November_2017.jpg/1200px-Parliament_of_Hungary_November_2017.jpg",
      desc:"BUDAPEST________________orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",

    },
  ];


  triggerIndex:number = 0;

  constructor() { }

  getSlides(): Slide[] {

    return this.slides;
  }

  turnToPreviousImage():void{
    if(this.currentIndex > 0){
      this.currentIndex -=1;
    }
  }
  turnToNextImage():void{
    if(this.currentIndex < this.slides.length){
      this.currentIndex +=1;
    }
  }

  setCurrentIndex(newIndex:number):void{
    this.currentIndex = newIndex;
  }

  getCurrentIndex():number{
    return this.currentIndex;
  }


}
