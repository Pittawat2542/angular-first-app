import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./pages/home/home.component";
import { Page1Component } from "./pages/page1/page1.component";
import { Subpage1Component } from "./pages/page1/subpage1/subpage1.component";
import { Page2Component } from "./pages/page2/page2.component";
import { Page3Component } from "./pages/page3/page3.component";
import { LoginComponent } from "./pages/login/login.component";
import { NotfoundComponent } from "./pages/notfound/notfound.component";
import { AuthGuard } from "./guard/auth.guard";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    pathMatch: "full",
    canActivate: [AuthGuard]
  },
  { path: "page1", component: Page1Component, pathMatch: 'full' },
  { path: "page1/subpage1", component: Subpage1Component },
  { path: "page2", component: Page2Component },
  { path: "page3", component: Page3Component },
  { path: "page3/:id", component: Page3Component },
  { path: "login", component: LoginComponent },
  { path: "**", component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
