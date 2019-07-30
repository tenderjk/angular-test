import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { OtherService } from './../other.service'
import { Observable } from 'rxjs';
import { HttpResponse } from '@angular/common/http';
@Component({
  selector: 'app-other-sub1',
  templateUrl: './other-sub1.component.html',
  styleUrls: ['./other-sub1.component.scss']
})
export class OtherSub1Component implements OnInit {
  time: string
  userList: Array<any>
  constructor(
    private route: ActivatedRoute,
    private router:Router,
    private service: OtherService
  ) { }
  
  
  ngOnInit() {
    const inp = document.getElementById('inp')
    console.log(this.route)
    this.service.fn()
    this.service.fn2()
    this.service.fn3()
    const sub = this.service.fromEvent(inp, 'keydown').subscribe(
      (res: KeyboardEvent) => {
        if(res.keyCode === 27) {
          console.log('esc')
        } else {
          console.log('other')
        }
      },
      null,
      () => { 
        console.log('complete')
        sub.unsubscribe()
       }
    )
    this.service.getData().subscribe( res => {
      console.log(res)
    } )

    // this.service.interval.subscribe( num => {
    //   console.log(num)
    // })
    // this.service.timer()
    const test: any = this.service.fnEvent(inp, 'click').subscribe( e => {
      if (!test.count) {
        test.count = 0
      }
      test.count ++
      if (test.count === 4) {
        test.unsubscribe()
      }
      console.log('fnEvent', e)
    } )

    this.service.map()

    // this.time = this.service.time as Observable<string>
    let t1 = this.service.time.subscribe( (res:string) => {
      this.time = res
      setTimeout(() => {
        t1.unsubscribe()
      }, 3000);
    }
     )
     
     this.service.getName().subscribe(
       res => {
         console.log(res)
         this.userList = res['username']
        }
     )
  }
  search (v) {
    this.service.showKeyUp(v)
  }
}
