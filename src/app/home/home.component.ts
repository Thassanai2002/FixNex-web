import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { HemoService } from './service/hemo.service';
import { Sendmodle } from './interface/send';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {

  images: string[] = [
    'assets/PNG/fixnex.png',
    'assets/PNG/google-Photoroom.png',
    'assets/PNG/facebook.png'
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

  items: MenuItem[] | undefined;

  constructor(private HemoService: HemoService) { }
  ngOnInit() {
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
      console.log(data.message);
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
}
