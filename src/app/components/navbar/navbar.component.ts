import { Component, OnInit, ElementRef, Input } from '@angular/core';
import { ROUTES } from '../sidebar/sidebar.component';
import {
  Location,
  LocationStrategy,
  PathLocationStrategy,
} from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  @Input() showLogo: boolean;

  public focus;
  public listTitles: any[];
  public location: Location;

  constructor(
    location: Location,
    private element: ElementRef,
    private router: Router
  ) {
    this.location = location;
  }

  ngOnInit() {
    this.listTitles = ROUTES.filter((listTitle) => listTitle);
  }

  getTitle() {
    const titlee = this.location.prepareExternalUrl(this.location.path());

    for (let item = 0; item < this.listTitles.length; item++) {
      if (this.listTitles[item].path === titlee) {
        return this.listTitles[item].title;
      }
    }

    return 'Blank';
  }

  getNameProfile(): string {
    if (localStorage.getItem('nameProfile')) {
      return localStorage.getItem('nameProfile');
    }
    return 'Sack';
  }
}
