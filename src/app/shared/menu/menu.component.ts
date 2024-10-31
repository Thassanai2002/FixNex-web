import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  @Input() public name = '';
  public sidebarVisible = false;

  public constructor(
    private router: Router
  ) {
    //
  }

  public ngOnInit(): void {
    //
  }

  public goToPage(path: string): void {
    switch (path) {
      case 'home': this.router.navigate(['home']);
        break;
      case 'order-food': this.router.navigate(['order-food']);
        break;
      case 'training': this.router.navigate(['training']);
        break;
      case 'calfood': this.router.navigate(['calfood']);
        break;
      case 'profile': this.router.navigate(['profile']);
        break;
      case 'logout':
        localStorage.clear();
        this.router.navigate(['logo']);
        break;
      default: break;
    }
  }

}
