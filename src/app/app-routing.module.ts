import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './feature/home/home.component';
import { LoginComponent } from './feature/login/login.component';
import { PostsComponent } from './feature/posts/posts.component';
import { AuthGuardService } from './core/services/guards/auth-guard/auth-guard.service';
import { RegistrationComponent } from './feature/registration/registration.component';
import { PostComponent } from './feature/post/post.component';

const routes: Routes = [
  {
    path: 'home',  // ez lesz kiírva a Localhost:4200 után
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'posts',
    component: PostsComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'post/:id/test/:secondParam',
    component: PostComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'registration',
    component: RegistrationComponent
  },
  {
    path: '',  // ha semmmit nem ír be, irányítson rá a home-ra
    redirectTo: '/home',
    pathMatch: 'full'  // ezt ide kell írni a redirectTo miatt
  },
  {
    path: '**',  // ha bármi az url, irányítson rá a home-ra
    redirectTo: '/home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
