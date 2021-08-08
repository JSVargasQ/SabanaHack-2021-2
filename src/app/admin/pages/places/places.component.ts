import { Component, OnInit } from '@angular/core';

import { response } from './dummy-response';

@Component({
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.scss'],
})
export class PlacesComponent implements OnInit {
  elements: any;

  headers: any = [
    {
      label: 'Lugar',
      field: 'label',
    },
    {
      label: 'Dirección',
      field: 'address',
    },
  ];

  constructor() {}

  ngOnInit() {
    this.elements = response;
  }
}
