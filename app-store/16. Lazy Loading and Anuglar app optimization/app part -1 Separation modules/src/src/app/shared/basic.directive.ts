import { Directive,  OnInit, Renderer2, ElementRef } from '@angular/core';

@Directive({
selector: '[appBasicHighlight]'
})

export class AppBasicDirective implements  OnInit {

  constructor(private renderer: Renderer2, private elemRef: ElementRef) {}

  ngOnInit()  {
    this.renderer.setStyle(this.elemRef.nativeElement, 'color', 'blue');
  }
 


}