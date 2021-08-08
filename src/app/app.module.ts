import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import {
  PublicLayoutComponent,
  AdminLayoutComponent,
  UserLayoutComponent,
} from './layouts';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormlyModule.forRoot({ extras: { lazyRender: true } }),
    FormlyBootstrapModule,
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    PublicLayoutComponent,
    UserLayoutComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
