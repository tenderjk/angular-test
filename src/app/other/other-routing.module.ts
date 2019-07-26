import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OtherMainComponent } from './other-main/other-main.component';
import { OtherSub1Component } from './other-sub1/other-sub1.component';
import { OtherSub2Component } from './other-sub2/other-sub2.component';
import { OtherAlertComponent } from './other-alert/other-alert.component';


const routes: Routes = [
  {
    path: 'other',
    component: OtherMainComponent,
    children: [
      {
        path: 'sub1',
        component: OtherSub1Component
      },
      {
        path: 'sub2',
        component: OtherSub2Component
      },
      {
        path: 'compose',
        component: OtherAlertComponent,
        outlet: 'show'
      }
    ]
  },
  {
    path: 'compose',
    component: OtherAlertComponent,
    // outlet: 'show'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OtherRoutingModule { }
