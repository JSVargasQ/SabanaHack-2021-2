import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PassportComponent } from './pages';

const routes: Routes = [
  {
    path: 'passport',
    component: PassportComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
