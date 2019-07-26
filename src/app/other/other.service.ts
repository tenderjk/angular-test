import { Injectable } from '@angular/core';
import { of, from, Observable, interval, merge, fromEvent } from 'rxjs'
import { map, filter } from 'rxjs/operators'
import { HeroServiceService } from './../hero-service.service'
import axios, { AxiosResponse } from 'axios'
@Injectable({
  providedIn: 'root'
})
 
// Execute with the observer object
export class OtherService {
  myObserver = {
    next: x => console.log('Observer got a next value: ', x),
    error: err => console.error('Observer got an error: ' + err),
    complete: () => console.log('Observer got a complete notification'),
  };
  myObservable = of(1, 2, 3);
  
  testOb = this.service.getHeros()
  constructor(private service: HeroServiceService) { }
  fn () {
    this.myObservable.subscribe(this.myObserver)
    this.testOb.subscribe(this.myObserver)
  }

  
  seSubscriber = function (observer) {
    observer.next([{name: 'yj'},{name: 'xx'}])
    observer.complete()
    return {
      unsubscribe () { console.log('!!!') }
    }
    // return {unsubscribe() {}};
  }
  seObservable = new Observable(this.seSubscriber)
  fn2 () {
    this.seObservable.subscribe(
      res => { console.log(res) },
      err => {},
      () => { console.log('ssuccess') }
    )
  }

  testObservable = from(['123', 1, 3, 444])
  fn3 () {
    this.testObservable.subscribe({
      next: res => console.log('hello', res),
      complete: () => { console.log('hello success') }
    })
  }

  fromEvent(target, eventName) {
    return new Observable((observer) => {
      const handler = (e:KeyboardEvent) => {
        if(e.keyCode === 27) {
          observer.complete()
        }
        observer.next(e)
        // observer.next(e.target)
      };
   
      // Add the event handler to the target
      target.addEventListener(eventName, handler);
   
      return () => {
        // Detach the event handler from the target
        console.log('now destory!')
        target.removeEventListener(eventName, handler);
      };
    });
  }
  getData (): Observable<AxiosResponse> {
    // return new Observable<Promise<AxiosResponse>>((observer) => {
    //     observer.next(axios.get('api/mock'))
    // })
    return from(axios.get('api/mock'))
  }


  fnEvent<Observer>(target: HTMLElement, event: string) {
    return fromEvent(target, event)
  }
  
  // interval = interval(200)
  // timer () {
  //   var timer1 = interval(1000)
  //   var timer2 = interval(2000)
  //   var timer3 = interval(500)
  //   var concurrent = 2; // the argument
  //   var merged = merge(timer1, timer2, timer3, 3);
  //   merged.subscribe(x => console.log(x));
  // }

  map () {
    // let newmap = map( (v: number) => v * v )
    // newmap(this.myObservable).subscribe( x => {
    //   console.log(x)
    // } )
    this.myObservable.pipe(
      map((v: number) => v * v),
      filter((v:number) => v%2 !== 0)
    ).subscribe( res => {
      console.log(res)
    } )
  }

    time = new Observable(observer => {
      let timer = setInterval(() => observer.next(new Date().toString()), 1000)
      return () => {
        clearInterval(timer)
      }
    }
  );

}
