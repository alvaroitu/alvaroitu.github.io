import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { MatToolbarModule } from '@angular/material/toolbar';

import { HeaderComponent } from './header.component';
// import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    NgbModule,
    // RouterModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
