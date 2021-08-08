import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { IconsComponent } from './pages/icons/icons.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { TablesComponent } from './pages/tables/tables.component';

import { PlacesComponent } from './pages';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'places',
    component: PlacesComponent,
  },
  {
    path: 'user-profile',
    component: UserProfileComponent,
  },
  {
    path: 'tables',
    component: TablesComponent,
  },
  {
    path: 'icons',
    component: IconsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
