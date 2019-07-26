import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
@Component({
  selector: 'app-other-main',
  templateUrl: './other-main.component.html',
  styleUrls: ['./other-main.component.scss']
})
export class OtherMainComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }
  jump (url :string) {
    console.log(url)
    this.router.navigate([url],{relativeTo: this.route})
  }
  ngOnInit() {
  }

}
