import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {

  @Input() appHighlight:string ="";
  @Input() afterHover:string = "";



  constructor( private element: ElementRef) {

   }

   ngOnInit(){
    console.log("HIGHLIGHT DIREKTIVA")
    this.element.nativeElement.style.backgroundColor =this.appHighlight;
   }

   @HostListener('mouseenter') onMouseEnter():void{
    this.element.nativeElement.style.backgroundColor ="yellow";
   }
   @HostListener('mouseleave') onMouseLeave():void{
    this.element.nativeElement.style.backgroundColor =this.afterHover;
   }

}
