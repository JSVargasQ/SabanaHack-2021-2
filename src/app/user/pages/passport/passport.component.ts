import { Component, OnInit } from '@angular/core';
import { response } from './dummy-categories-response';

@Component({
  templateUrl: './passport.component.html',
  styleUrls: ['./passport.component.scss'],
})
export class PassportComponent implements OnInit {
  public categories = response;
  public isOpen = true;

  ngOnInit() {}

  public openPassport(): void {
    this.isOpen = true;
  }

  public closePassport(): void {
    this.isOpen = false;
  }

  public onMapReady(event) {
    console.log('Map Ready');
  }
}
