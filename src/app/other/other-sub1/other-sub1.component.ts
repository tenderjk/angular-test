import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
@Component({
  selector: 'app-other-sub1',
  templateUrl: './other-sub1.component.html',
  styleUrls: ['./other-sub1.component.scss']
})
export class OtherSub1Component implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit() {
    console.log(this.route)
  }

}
