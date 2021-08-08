import { Component, Input } from '@angular/core';
import { get } from 'lodash';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {
  @Input() title: string;

  @Input() header: any[];
  @Input() elements: any[];
  @Input() actions: any;

  constructor() {}

  getDataOfElement(col: any, element: any): any {
    let html: string;
    const val = get(element, col.field);
    html = val;
    if (!html) {
      return ' - ';
    }
    return html;
  }
}
