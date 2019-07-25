import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HerosComponent } from './heros/heros.component';
import { HeroDetailJumpComponent } from './hero-detail-jump/hero-detail-jump.component';
import { CrisisListComponent } from './crisis-list/crisis-list.component';



const routes: Routes = [
  {
    path: 'index', component: HerosComponent,
    data: {animation: 'index'}
  },
  {
    path: 'detail/:id', component: HeroDetailJumpComponent,
    data: {animation: 'herodetail'}
  },
  {
    path: 'crisis', component: CrisisListComponent,
    data: {animation: 'crisis'}
  },
  {
    path: '',
    redirectTo: 'index',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
