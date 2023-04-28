import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';


const routes: Routes = [
  
  {
    path: 'login',
    component: LoginComponent,
    title: "Bejelentkezés"
  },
  
  {
    path: 'registration',
    component: RegistrationComponent,
    title: "Regisztráció"
  },
  {
    path: '',
    redirectTo: '/auth/login',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
