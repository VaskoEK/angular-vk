import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHoverProdName]'
})
export class HoverProdNameDirective {

  newImgUrl: string = '';

  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') 
  onMouseEnter(): void {
    this.hoverChangeBg(this.newImgUrl);
  }

  @HostListener('mouseleave') 
  onMouseLeave(): void {
    this.hoverChangeBg('');
  }

  private hoverChangeBg(imgUrl: string): void {
    this.el.nativeElement.innerHTML = imgUrl;
  }
  
}
