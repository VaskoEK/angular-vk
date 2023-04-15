import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './feature/home/home.component';
import { LoginComponent } from './feature/auth/login/login.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { PostsComponent } from './feature/posts/posts.component';
import { RegistrationComponent } from './feature/auth/registration/registration.component';
import { PostComponent } from './feature/post/post.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module';
import { TruncatePipe } from './core/pipes/truncate/truncate.pipe';
import { TagLimitPipe } from './core/pipes/tag-limit/tag-limit.pipe';
import { AuthModule } from './feature/auth/auth.module';
import { PostListComponent } from './feature/post-list/post-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PostsComponent,
    PostComponent,
    TruncatePipe,
    TagLimitPipe,
    PostListComponent
  ],
  imports: [
    BrowserModule,  // megkapja minden, ami az app modulból töltődik be!
    AppRoutingModule,
    ReactiveFormsModule,  // csak az a modul kapja meg, ahol betöltjük, többi nem kapja meg, így ott is importálni kell
    HttpClientModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FormsModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
