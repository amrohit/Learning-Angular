import { Directive, OnInit, Renderer2, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  constructor(private renderer: Renderer2, private eleRef: ElementRef) { }

  ngOnInit() {
    //Using renderer is best practice as accessing elements directly will not work with the DOM while using services.
    this.renderer.setStyle(this.eleRef.nativeElement, 'background-color', 'blue');
    this.renderer.setStyle(this.eleRef.nativeElement, 'color', 'white');
  }
}
