import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { RegistrationComponent } from './registration/registration.component';
import { TaskComponent } from './tasks/tasks.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  {path: 'registration', component: RegistrationComponent},
  {path: 'tasks', component: TaskComponent},
  // Add more routes as needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
