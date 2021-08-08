import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ClipboardModule } from 'ngx-clipboard';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatIconModule } from '@angular/material/icon';

import { AdminRoutingModule } from './admin-routing.module';

import {
  DashboardComponent,
  PlacesComponent,
  IconsComponent,
  UserProfileComponent,
  TablesComponent,
} from './pages';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AdminRoutingModule,
    HttpClientModule,
    MatIconModule,
    NgbModule,
    ClipboardModule,
    SharedModule,
  ],
  declarations: [
    DashboardComponent,
    PlacesComponent,
    UserProfileComponent,
    TablesComponent,
    IconsComponent,
  ],
})
export class AdminModule {}
