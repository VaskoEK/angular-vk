import { Component } from '@angular/core';
import {SlideServiceService} from '../../core/services/slide/slide-service.service'


@Component({
  selector: 'app-select-button',
  templateUrl: './select-button.component.html',
  styleUrls: ['./select-button.component.scss']
})
export class SelectButtonComponent {


  constructor(private readonly slideService: SlideServiceService){
  }


  buttonClicked(){
    this.slideService.triggerIndex = Math.random();
    console.log("BUTTON CLICKED");
  }
}
