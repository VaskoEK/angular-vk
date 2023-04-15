import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular_vk';

  constructor(private router: Router) {

  }

  navigateToHome(): void {
    this.router.navigate(['home'])  // ez is tömböt vár, mint a routerLink a html oldalon
  }

  navigateToLogin(): void {
    this.router.navigate(['auth', 'login'])
  }

}
