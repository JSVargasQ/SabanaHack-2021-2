import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { response } from './dummy-response';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  // Attributes
  // =================================

  _username: string;
  _password: string;

  loading = false;

  // Constructor
  // =================================
  constructor(private router: Router) {}

  ngOnInit() {}

  // Methods
  // =================================
  iniciarSesion(): void {
    this.loading = true;

    setTimeout(() => {
      const login: any = this.validatePassword(this._username, this._password);
      if (login === null) {
      } else {
        if (login.role === 'USER') {
          this.router.navigate(['/passport']);
        } else if (login.role === 'ADMIN') {
          this.router.navigate(['/places']);
        }
      }
      this.loading = false;
    }, 1500);
  }

  validatePassword(username: string, password: string): any {
    for (const el of response) {
      if (
        el.email.toLowerCase() === username.toLowerCase() &&
        el.password === password
      ) {
        return el;
      }
    }
    return null;
  }
}
