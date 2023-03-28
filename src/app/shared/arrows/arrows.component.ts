import { Component } from '@angular/core';
import { SlideServiceService } from 'src/app/core/services/slide/slide-service.service';

@Component({
  selector: 'app-arrows',
  templateUrl: './arrows.component.html',
  styleUrls: ['./arrows.component.scss']
})
export class ArrowsComponent {

  // slideService: SlideServiceService
  constructor(public readonly slideService: SlideServiceService){}

  leftArrowClicked(){
    this.slideService.turnToPreviousImage();
  }

  rightArrowClicked(){
    this.slideService.turnToNextImage();
  }
}
