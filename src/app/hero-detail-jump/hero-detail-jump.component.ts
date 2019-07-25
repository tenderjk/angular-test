import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import Heros from '../heros';
import Hero from '../hero'
@Component({
  selector: 'app-hero-detail-jump',
  templateUrl: './hero-detail-jump.component.html',
  styleUrls: ['./hero-detail-jump.component.scss']
})
export class HeroDetailJumpComponent implements OnInit {
  selectedHero: Hero
  Heros: Hero[] = Heros
  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {}
  back () {
    this.router.navigate(['/index'])
  }
  ngOnInit() {
    let id =  this.route.snapshot.paramMap.get('id')
    this.selectedHero = this.Heros[id]
    // this.route.queryParamMap.subscribe(params => {
    //   this.id = params['id']
    //   this.selectedHero = this.Heros[this.id]
    //   console.log(this.id)
    //   console.log(this.Heros[this.id])
    // })
  }

}
