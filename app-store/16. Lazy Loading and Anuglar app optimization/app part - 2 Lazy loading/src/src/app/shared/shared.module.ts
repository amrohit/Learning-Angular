import { NgModule } from '@angular/core';
import { AppBasicDirective } from './basic.directive'
import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [
    AppBasicDirective
  ],
  exports: [
    CommonModule,
    AppBasicDirective
  ]

})

export class SharedModule {

}