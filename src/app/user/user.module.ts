import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ClipboardModule } from 'ngx-clipboard';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from '../shared/shared.module';
import { MatMenuModule } from '@angular/material/menu';

import { PassportComponent } from './pages';
import { MapComponent } from './components';

import { UserRoutingModule } from './user-routing.module';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
  declarations: [PassportComponent, MapComponent],
  imports: [
    CommonModule,
    FormsModule,
    UserRoutingModule,
    HttpClientModule,
    MatIconModule,
    NgbModule,
    ClipboardModule,
    SharedModule,
    MatMenuModule,
    MatCheckboxModule,
  ],
})
export class UserModule {}
