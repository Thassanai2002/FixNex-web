import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { HemoService } from './service/hemo.service';
import { Sendmodle } from './interface/send';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  public name!: string;


  images: string[] = [
    'assets/PNG/fixnex.png',
    'assets/program/Picture3.jpg',
    'assets/program/Picture13.jpg'
  ];

  responsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 3
    },
    {
      breakpoint: '768px',
      numVisible: 2
    },
    {
      breakpoint: '560px',
      numVisible: 1
    }
  ];

  // Proper typing for the position variable
  position: 'top' | 'bottom' | 'left' | 'right' = 'bottom';  // Initial value

  showIndicatorsOnItem: boolean = false; // Checkbox toggle for indicators inside the image

  items: MenuItem[] | undefined;

  constructor(private HemoService: HemoService, private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    window.scroll(0, 0);
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-home',
      },
      {
        label: 'Features',
        icon: 'pi pi-star',
      },
      {
        label: 'Projects',
        icon: 'pi pi-search',
        items: [
          {
            label: 'Components',
            icon: 'pi pi-bolt',
          },
          {
            label: 'Blocks',
            icon: 'pi pi-server',
          },
          {
            label: 'UI Kit',
            icon: 'pi pi-pencil',
          },
          {
            label: 'Templates',
            icon: 'pi pi-palette',
            items: [
              {
                label: 'Apollo',
                icon: 'pi pi-palette',
              },
              {
                label: 'Ultima',
                icon: 'pi pi-palette',
              },
            ],
          },
        ],
      },
      {
        label: 'Contact',
        icon: 'pi pi-envelope',
      },
    ];
  }

  public testapi(): void {
    this.HemoService.testapi().subscribe((data) => {
      console.log(data);
      console.log("kuy");
    })
  }

  public testsend(): void {
    let modle: Sendmodle = {
      fname: 'test',
      lname: 'test',
      id: 1
    }
    this.HemoService.testsend(modle).subscribe((data) => {
      console.log(data);
    })
  }

  public gofoodInfo(): void {
    this.router.navigate(['/foodInfo']);
  }

  public goprogramInfo(): void {
    this.router.navigate(['/programInfo']);
  }

  gotraining(): void {
    this.router.navigate(['/training']);
  }

  public gocalInfo(): void {
    this.router.navigate(['/calInfo']);
  }

  public gocalfood(): void {
    this.router.navigate(['/calfood']);
  }

  public gorecfood(): void {
    this.router.navigate(['/recfood']);
  }

}
