import { Component, OnInit } from '@angular/core';
import axios from 'axios'
import Hero from './../hero'
// import  { test }  from './../heros'
@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.scss']
})
export class HerosComponent implements OnInit {
  herosData: Hero[];
  selectedHero: Hero
  constructor() { }

  showFlag (val:string) {
    console.log(val)
  }
  show (target) {
    console.log(target)
  }
  ngDoCheck() {
    console.log('ngDoCheck',this.herosData)
  }

  ngOnInit() {
    axios.get('api/mock').then(res => {
      console.log(res.data)
      this.herosData = res.data.user
    })
    // setTimeout(() => {
    //   this.herosData = []
    // }, 3000);
    console.log('init',this.herosData)

  }

  onSelect(value: Hero): void {
    console.log(value)
    this.selectedHero = value
  }

  ngOnChanges() {
    console.log('change',this.herosData)

  }
  
  ngAfterContentInit() {
    console.log('AfterContentInit')
  }

  ngAfterContentChecked() {
    console.log('AfterContentChecked')
  }

  ngAfterViewInit() {
    console.log('AfterViewInit')
  }

  ngAfterViewChecked() {
    console.log('AfterViewChecked')
  }

  ngOnDestroy() {
    console.log('Destroy')
  }

}
