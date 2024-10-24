import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cal-info',
  templateUrl: './cal-info.component.html',
  styleUrl: './cal-info.component.scss'
})
export class CalInfoComponent {

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    window.scroll(0, 0); }

  public gohome(): void {
    this.router.navigate(['/home']);
  }

  public gocalfood(): void {
    this.router.navigate(['/calfood']);
  }

}
