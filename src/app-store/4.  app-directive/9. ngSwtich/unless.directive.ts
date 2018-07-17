import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {

  //we want to bind to  property name unless which kind of condition we get, but whenever this condition changes or whenever some input parameter changes, I want to execute a method. thats why we can implement a setter with set keyword which will turn this into a method
//Technically, To undersand this is still a property, its just a setter of property which is a method which get executed whenever a property change and it ofcourse changes whenever the propery of outside changes with condition
//MAke sure that our property shares the name of directive

  @Input() set appUnless (condition: boolean) {
    if (!condition) {
  this.vcRef.createEmbeddedView(this.templateRef);
    } else {
  this.vcRef.clear();
    }
  }
  constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) { }

}
