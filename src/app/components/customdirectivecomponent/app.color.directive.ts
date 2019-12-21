import {Directive, Input, ElementRef, Renderer, HostListener} from '@angular/core';

@Directive({
  selector: '[setColor]'
})
export class ColorDirective{
  // data
  @Input('setColor')setColor: string;
  constructor(private ele: ElementRef, private renderer: Renderer){}

  // logic + UI effects
  private applyColor(color: string): void {
     this.renderer.setElementStyle(this.ele.nativeElement, 
      'backgroundColor',
      color);
  }
  // events
  @HostListener('mouseleave')
  mouseLeave(): void {
    this.applyColor(null);
  }
  // events
  @HostListener('mouseenter')
  mouseEnter(): void {
    this.applyColor(this.setColor || 'cyan');
  }
}