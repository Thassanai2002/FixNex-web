import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-food-information',
  templateUrl: './food-information.component.html',
  styleUrl: './food-information.component.scss'
})
export class FoodInformationComponent {
  public name!: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    window.scroll(0, 0); }

  public gohome(): void {
    this.router.navigate(['/home']);
  }

}
