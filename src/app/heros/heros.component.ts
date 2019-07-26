import { Component, OnInit } from '@angular/core';
import axios from 'axios'
import { HeroServiceService } from './../hero-service.service'
import Hero from './../hero'
import { observable, of } from 'rxjs'
import { switchMap } from 'rxjs/operators'
// import  { test }  from './../heros'
@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.scss']
})
export class HerosComponent implements OnInit {
  herosData: Hero[];
  selectedHero: Hero
  constructor(private service: HeroServiceService) {
    console.log(service)
   }

  showFlag (val:string) {
    console.log(val)
  }
  show (target) {
    console.log(target)
  }
  ngDoCheck() {
  }
  dataInit (): void {
    this.service.getHeros().subscribe(res => {
      this.herosData = res
    })
  }
  ngOnInit() {
    // axios.get('api/mock').then(res => {
    //   console.log(res.data)
    //   this.herosData = res.data.user
    // })
    // setTimeout(() => {
    //   this.herosData = []
    // }, 3000);
    this.dataInit()
    // console.log('init',this.herosData)

  }

  onSelect(value: Hero): void {
    console.log(value)
    this.selectedHero = value
  }

  // ngOnChanges() {
  //   console.log('change',this.herosData)

  // }
  
  // ngAfterContentInit() {
  //   console.log('AfterContentInit')
  // }

  // ngAfterContentChecked() {
  //   console.log('AfterContentChecked')
  // }

  // ngAfterViewInit() {
  //   console.log('AfterViewInit')
  // }

  // ngAfterViewChecked() {
  //   console.log('AfterViewChecked')
  // }

  // ngOnDestroy() {
  //   console.log('Destroy')
  // }

}
