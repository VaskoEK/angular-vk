import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './core/services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular_vk';
  loggedIn: boolean = false;

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {
    this.authService.checkLoggedIn();
    this.authService.loggedIn$.subscribe((res)=> {  // feliratkozunk, h megtudjuk, be vagyunk-e a jelentkezve
      this.loggedIn = res;  
    })
  }

  navigateToHome(): void {
    this.router.navigate(['home'])  // ez is tömböt vár, mint a routerLink a html oldalon
  }

  navigateToLogin(): void {
    this.router.navigate(['auth', 'login'])
  }

  logout():void {
    this.authService.logout();
    this.router.navigate(['home']);
  }

}
