import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { RecfoodService } from './service/recfood.service';
import { ActivatedRoute, Router } from '@angular/router';
import {MatGridListModule} from '@angular/material/grid-list';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
  fontSize: string;
  textColor: string;
}

@Component({
  selector: 'app-recommend-food',
  templateUrl: './recommend-food.component.html',
  styleUrl: './recommend-food.component.scss',
})
export class RecommendFoodComponent {

  tiles: Tile[] = [
    {text: 'PROMOTION', cols: 2, rows: 1, color: '#9c9c9c', fontSize: '20px', textColor: 'black'},
    {text: '50%', cols: 1, rows: 2, color: '#9c9c9c', fontSize: '30px', textColor: 'red'},
    {text: 'ลดราคาสูงสุด ถึง', cols: 2, rows: 1, color: '#9c9c9c', fontSize: '20px', textColor: 'red'}
  ];

  images: string[] = [
    'assets/PNG/FoodInfo2.png',
    'assets/PNG/fixnex.png',
    'assets/PNG/google-Photoroom.png',
    'assets/PNG/facebook.png',
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

  

  position: 'top' | 'bottom' | 'left' | 'right' = 'bottom';  

  showIndicatorsOnItem: boolean = false; 

  items: MenuItem[] | undefined;

  constructor(private RecfoodService: RecfoodService, private router: Router,
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
}

