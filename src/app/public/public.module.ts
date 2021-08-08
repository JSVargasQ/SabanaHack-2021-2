import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';

import { PublicRoutingModule } from './public-routing.module';

import { HomeComponent, LoginComponent, RegisterComponent } from './pages';

@NgModule({
  declarations: [HomeComponent, LoginComponent, RegisterComponent],
  imports: [
    CommonModule,
    FormsModule,
    PublicRoutingModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatSelectModule,
    ReactiveFormsModule,
    NgbDatepickerModule,
  ],
})
export class PublicModule {}
