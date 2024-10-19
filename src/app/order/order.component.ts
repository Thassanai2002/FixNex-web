import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StateDataInterface } from '../shared/interfaces/interfaceAll';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrl: './order.component.scss',
})
export class OrderComponent {
  state = {} as StateDataInterface<any>;
  oderItems!: any;

  constructor(private router: Router, private route: ActivatedRoute) {
    this.route.queryParams.forEach(() => {
      this.state =
        (this.router.getCurrentNavigation()?.extras
          ?.state as StateDataInterface<any>) ||
        ({} as StateDataInterface<any>);
    });
  }

  ngOnInit() {
    console.log(this.state.criteriaData);

  }
}
