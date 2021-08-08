import { Component, OnInit } from '@angular/core';

import { response } from './dummy-response';
import { element } from 'protractor';

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
  constructor() {}

  ngOnInit() {}

  // Methods
  // =================================
  iniciarSesion(): void {
    this.loading = true;

    setTimeout(() => {
      const login: boolean = this.validatePassword(
        this._username,
        this._password
      );
      console.log('El estado de login es: ' + login);
      this.loading = false;
    }, 1500);
  }

  validatePassword(username: string, password: string): boolean {
    for (const el of response) {
      if (
        el.email.toLowerCase() === username.toLowerCase() &&
        el.password === password
      ) {
        return true;
      }
    }
    return false;
  }
}
