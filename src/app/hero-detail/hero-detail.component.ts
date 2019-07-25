import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import Hero from './../hero'
@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})

export class HeroDetailComponent implements OnInit {
  private _name: string
  @Input() selectedHero: Hero
  @Input() set name ( value: string ) {
    this._name = value + 'test'
  }
  get name (): string {
    return this._name
  }
  test (): void {
    console.log(this.name)
  }
  @Output () voted = new EventEmitter<boolean>()
  flag:boolean = false
  send() {
    if (this.flag === true) {
      this.flag = false
    } else {
      this.flag = true
    }
    this.voted.emit(this.flag)
  }
  userInp:string
  constructor() { }
  ngOnInit() {
    this.send()
    console.log('sub-init')
  }
  userKeyUp(value: string) {
    this.userInp += value + '|'
    console.log(value)
  }

  ngOnChanges() {
    console.log('sub-change')
  }

  ngDoCheck() {
    console.log('sub-ngDoCheck')
  }

  ngAfterContentInit() {
    console.log('sub-AfterContentInit')
  }

  ngAfterContentChecked() {
    console.log('sub-AfterContentChecked')
  }

  ngAfterViewInit() {
    console.log('sub-AfterViewInit')
  }

  ngAfterViewChecked() {
    console.log('sub-AfterViewChecked')
  }

  ngOnDestroy() {
    console.log('sub-Destroy')
  }
}
