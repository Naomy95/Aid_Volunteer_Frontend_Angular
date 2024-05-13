import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module'; // Import your routing module
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { TaskComponent } from './tasks/tasks.component';
import { RegistrationComponent } from './registration/registration.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    TaskComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    RouterModule, // Make sure RouterModule is imported here
    AppRoutingModule // Import your routing module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
