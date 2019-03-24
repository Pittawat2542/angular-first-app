import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { MaterialModule } from "./app.material.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./pages/home/home.component";
import { Page1Component } from "./pages/page1/page1.component";
import { Page2Component } from "./pages/page2/page2.component";
import { Page3Component } from "./pages/page3/page3.component";
import { LoginComponent } from "./pages/login/login.component";
import { NotfoundComponent } from "./pages/notfound/notfound.component";
import { AuthGuard } from "./guard/auth.guard";
import { Subpage1Component } from './pages/page1/subpage1/subpage1.component';
import { LoadApiDataService } from './providers/load-api-data.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Page1Component,
    Page2Component,
    Page3Component,
    LoginComponent,
    NotfoundComponent,
    Subpage1Component
  ],
  imports: [BrowserModule, AppRoutingModule, MaterialModule],
  providers: [LoadApiDataService ,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
