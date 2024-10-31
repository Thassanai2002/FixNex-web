import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrl: './logo.component.scss'
})
export class LogoComponent {

  constructor(
    private router: Router
  ) {
    window.scrollTo(0, 0);
  }

  goLogin () {
    this.router.navigate(['/login']);
  }

  goSignup () {
    this.router.navigate(['/singup']);
  }

}
