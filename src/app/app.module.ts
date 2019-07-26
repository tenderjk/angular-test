import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HerosComponent } from './heros/heros.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroDetailJumpComponent } from './hero-detail-jump/hero-detail-jump.component';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OtherModule } from './other/other.module';

@NgModule({
   declarations: [
      AppComponent,
      HerosComponent,
      HeroDetailComponent,
      HeroDetailJumpComponent,
      CrisisListComponent
   ],
   imports: [
      BrowserModule,
      FormsModule,
      BrowserAnimationsModule,
      OtherModule,
      AppRoutingModule,
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
