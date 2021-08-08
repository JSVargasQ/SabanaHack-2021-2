import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './passport.component.html',
  styleUrls: ['./passport.component.scss'],
})
export class PassportComponent implements OnInit {
  ngOnInit() {}

  public onMapReady(event) {
    console.log('Map Ready');
  }
}
