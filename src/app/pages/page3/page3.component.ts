import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-page3",
  templateUrl: "./page3.component.html",
  styleUrls: ["./page3.component.scss"]
})
export class Page3Component implements OnInit {
  param: any;

  constructor(public route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(data => (this.param = data));
  }
}
