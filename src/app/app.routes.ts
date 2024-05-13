import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { TaskComponent } from './tasks/tasks.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { RouterModule } from '@angular/router';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    {path: 'registration', component: RegistrationComponent},
    {path: 'tasks', component: TaskComponent},
    { path: '', component: LandingPageComponent },
];
