import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHoverProdName]'
})
export class HoverProdNameDirective {

  prodName: string = '';

  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') 
  onMouseEnter(): void {
    this.hoverChangeBg(this.prodName);
  }

  @HostListener('mouseleave') 
  onMouseLeave(): void {
    this.hoverChangeBg('');
  }

  private hoverChangeBg(name: string): void {
    this.el.nativeElement.innerHTML = name;
  }
  
}
