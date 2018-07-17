import {
  Directive,
  OnInit,
  Renderer2,
  ElementRef,
  HostListener
} from "@angular/core";

@Directive({
  selector: "[appBetterHighlight]"
})
export class BetterHighlightDirective implements OnInit {
  constructor(private renderer: Renderer2, private eleRef: ElementRef) {}

  ngOnInit() {
    //Using renderer is best practice as accessing elements directly will not work with the DOM while using services.
    // this.renderer.setStyle(this.eleRef.nativeElement, "background-color", "blue");
    this.renderer.setStyle(this.eleRef.nativeElement, "color", "white");
  }

  //We need to react on event where directive sits on
  /*
  This can be triggered when some events occurs and that event is
  specified here as a argument and string.
  Eg: if mouseenter event occurs, it will trigger this mouseover method(eventData: Event)
  and can also receive event data via argument of type Event
-> we can also listen the custom events here and retrive that data.
Eg: just like a method which execute when you add a click lister or whatever event and then pass the method between quotation mark and
that is what happening here
  */

  @HostListener("mouseenter") mouseover(eventData: Event) {
    this.renderer.setStyle(this.eleRef.nativeElement, "background-color", "blue");
  }

  @HostListener("mouseleave") mouseleave(eventData: Event) {
    this.renderer.setStyle(this.eleRef.nativeElement, "background-color", "transparent");
    this.renderer.setStyle(this.eleRef.nativeElement, "color", "black");
  }

}
