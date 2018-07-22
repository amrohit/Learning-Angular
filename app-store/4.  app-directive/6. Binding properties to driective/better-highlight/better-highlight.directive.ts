import {
  Directive,
  OnInit,
  Renderer2,
  ElementRef,
  HostListener,
  HostBinding,
  Input
} from "@angular/core";

@Directive({
  selector: "[appBetterHighlight]"
})
export class BetterHighlightDirective implements OnInit {
  constructor(private renderer: Renderer2, private eleRef: ElementRef) {}
   //Custom property binding(we can also use custom event binding)
   //and use in the html component where this directive sits
  @Input() defaultColor: string = 'transparent';
  // @Input() highlightColor: string = 'blue';

  //if we have same name of  alias and same directive selector
  //we can directly bind to the directive using bracket
  //[directiveSelector]="green", @Input('directiveSelector) stringName:string
 @Input('appBetterHighlight') highlightColor: string = 'blue';




  /* After HostListener concept
  we got another decorator to use which then allows not use renderer
  There is no bad using renderer but we have another easiest way to change
  the background color
  we are talking about @HostBinding() (HostBinding should be imported from
  @angular/core)
  we need to bind this some property which value will become important
  that is backgroundColor a new property I created here of type string
Now in @HostBinding('') we can pass a string defining to which property
  of the hosting element we want to bind
  style will be such a property, there then the backgroundColor will be precise
  we are accessing camel case  background property
  camel case is important here because we are accessing a DOM property
  which does not know dashes(-)
  Now this tell, on the element this directive sits, please access the
  style property( pretty much any input has. On other directives which access something like value, make sure they have such property, here style property should be available on any other element )
  so here we access the style property and then the sub property which is background color and we set this equal to whatever the background color is.
  of course we have set some  background color value , so we dont get error before the mouseover for the first time
  with HostBinding we can bind any property on which directive is sitting on
*/

// @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';

@HostBinding('style.backgroundColor') backgroundColor: string = this.defaultColor; //its not just set,so set it in ngOnInit()

  ngOnInit() {
    //Using renderer is best practice as accessing elements directly will not work with the DOM while using services.
    // this.renderer.setStyle(this.eleRef.nativeElement, "background-color", "blue");
    this.renderer.setStyle(this.eleRef.nativeElement, "color", "grey");

    //our default color is not being set and we are seeing white color before mouse over so we write under ngOnInit
  //before everything has been renderd our value will be avaialbe
  this.backgroundColor = this.defaultColor;
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
  //HostListner starts -->
  @HostListener("mouseenter") mouseover(eventData: Event) {
    // this.renderer.setStyle(this.eleRef.nativeElement, "background-color", "blue");
    this.backgroundColor = this.highlightColor;
  }

  @HostListener("mouseleave") mouseleave(eventData: Event) {
    // this.renderer.setStyle(this.eleRef.nativeElement, "background-color", "transparent");
    // this.renderer.setStyle(this.eleRef.nativeElement, "color", "black");
    this.backgroundColor = this.defaultColor;
  }

  //HostListener ends  <--


}
