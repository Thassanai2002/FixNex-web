import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-program-information',
  templateUrl: './program-information.component.html',
  styleUrl: './program-information.component.scss'
})
export class ProgramInformationComponent {
  public name!: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    window.scroll(0, 0); }

  public gohome(): void {
    this.router.navigate(['/home']); }

}
