import { Component } from '@angular/core';
import { SlideServiceService } from 'src/app/core/services/slide/slide-service.service';

@Component({
  selector: 'app-dots',
  templateUrl: './dots.component.html',
  styleUrls: ['./dots.component.scss']
})
export class DotsComponent {

  constructor(public readonly slideService: SlideServiceService){}

  dotClicked(slideIndex:number):void{
    this.slideService.setCurrentIndex(slideIndex);
  }
}
