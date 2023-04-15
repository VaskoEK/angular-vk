import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from 'src/app/angular-material.module';
import { AuthRoutingModule } from './auth-routing.module';



@NgModule({
  declarations: [
    LoginComponent,
    RegistrationComponent
  ],
  imports: [
    
    AuthRoutingModule,
    ReactiveFormsModule,
    // BrowserAnimationsModule,  // nem maradhat, szól érte: ERROR Error: Uncaught (in promise): Error: Providers from the `BrowserModule` have already been loaded.
    AngularMaterialModule,  // használat miatt kell
    FormsModule, // AngularMaterialModule miatt kell
    CommonModule  // ez is kell, kéri konzolban a button miatt
    
  ]
})
export class AuthModule { }
