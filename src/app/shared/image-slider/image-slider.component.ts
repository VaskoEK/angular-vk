import { Component, EventEmitter, Input, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { SlideServiceService } from 'src/app/core/services/slide/slide-service.service';
import { Slide } from 'src/app/core/types/slide/slide.type';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.scss']
})
export class ImageSliderComponent {

  @Output() slideSelected: EventEmitter<number> = new EventEmitter<number>();
  @Input() triggerIndex: number = 0;

  constructor(public readonly slideService: SlideServiceService){}


  ngOnChanges(changes:SimpleChanges){
    if(changes['triggerIndex'] && !changes['triggerIndex'].firstChange){
      this.emitSlideIndex();
    }
  }

  

  emitSlideIndex(slideIndex?:number):void{
    if(slideIndex){
      this.slideSelected.emit(slideIndex);
    }else{
      this.slideSelected.emit(this.slideService.getCurrentIndex());
    }
  }

  

}


