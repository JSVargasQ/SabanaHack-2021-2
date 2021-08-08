import { Component, OnInit } from '@angular/core';

import { FormControl } from '@angular/forms';
import { typesDocuments, typesGenders } from '../../../utils/model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  // Attributes
  // =================================

  formControl = new FormControl();

  typesDocument: any[] = typesDocuments;
  genders: any[] = typesGenders;

  // Constructor
  // =================================
  constructor() {}

  // Methods
  // =================================
  ngOnInit() {}
}
