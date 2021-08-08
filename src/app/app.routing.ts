import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import {
  AdminLayoutComponent,
  UserLayoutComponent,
  PublicLayoutComponent,
} from './layouts';

const routes: Routes = [
  {
    path: '',
    component: PublicLayoutComponent,
    loadChildren: () =>
      import('./public/public.module').then((m) => m.PublicModule),
  },
  {
    path: '',
    component: UserLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('src/app/user/user.module').then((m) => m.UserModule),
      },
    ],
  },
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('src/app/admin/admin.module').then((m) => m.AdminModule),
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [CommonModule, BrowserModule, RouterModule.forRoot(routes)],
  exports: [],
})
export class AppRoutingModule {}
