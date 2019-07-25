import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs'
import Hero from './hero'
import Heros from './heros'
@Injectable({
  providedIn: 'root'
})
export class HeroServiceService {

  constructor() { }
  getHeros (): Observable<Hero[]> {
    return of(Heros)
  }
}
