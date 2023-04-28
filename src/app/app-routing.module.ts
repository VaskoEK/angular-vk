import { NgModule, inject } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './feature/home/home.component';
import { LoginComponent } from './feature/auth/login/login.component';
import { PostsComponent } from './feature/posts/posts.component';
import { AuthGuardService } from './core/services/guards/auth-guard/auth-guard.service';
import { RegistrationComponent } from './feature/auth/registration/registration.component';
import { PostComponent } from './feature/post/post.component';
import { PostListComponent } from './feature/post-list/post-list.component';
import { ProductComponent } from './feature/product/product.component';
import { guard } from './core/services/guards/test';
import { AuthInjectableService } from './core/services/guards/auth-injectable/auth-injectable.service';



const routes: Routes = [
  {
    path: 'home',  // ez lesz kiírva a Localhost:4200 után
    component: HomeComponent,
    title: "Főképernyő"
  },
  {
    path: 'auth',
    loadChildren: () => import('./feature/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'posts',
    component: PostsComponent,
    // canActivate: [AuthGuardService]
    // canActivate: [()=>true]
    canActivate: [guard],
    title: "Postok"
  },
  {
    path: 'post-list',
    component: PostListComponent,
    canActivate: [AuthGuardService],
    title: "Postok listája"
  },
  {
    path: 'post/:id',
    component: PostComponent,
    canActivate: [AuthGuardService],
    title: "Post"
  },
  {
    path: 'product/:id',
    component: ProductComponent,
    title: "Termék"
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
