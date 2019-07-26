import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OtherRoutingModule } from './other-routing.module';
import { OtherMainComponent } from './other-main/other-main.component';
import { OtherSub1Component } from './other-sub1/other-sub1.component';
import { OtherSub2Component } from './other-sub2/other-sub2.component';
import { OtherAlertComponent } from './other-alert/other-alert.component';


@NgModule({
  declarations: [OtherMainComponent, OtherSub1Component, OtherSub2Component, OtherAlertComponent],
  imports: [
    CommonModule,
    OtherRoutingModule
  ]
})
export class OtherModule { }
