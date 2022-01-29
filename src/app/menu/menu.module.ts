import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import { MatDialogModule } from "@angular/material/dialog";

import { MenuComponent } from './menu.component';
import { RouterModule } from '@angular/router';
import { MatToolbar, MatToolbarModule } from '@angular/material/toolbar';



@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [
    CommonModule,
    MatMenuModule,
    MatIconModule,
    RouterModule,
    MatToolbarModule,
    MatDialogModule
  ],
  exports: [
    MenuComponent
  ]
})
export class MenuModule { }
