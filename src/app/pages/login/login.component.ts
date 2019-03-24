import { Component, OnInit } from "@angular/core";

import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  constructor(public router: Router) {}

  ngOnInit() {}

  login() {
    localStorage.setItem(
      "auth",
      JSON.stringify({
        status: true
      })
    );
    this.router.navigate(["/"]);
  }

  logout() {
    localStorage.removeItem("auth");
    this.router.navigate(["/login"]);
  }
}
