import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';

import { MenuComponent } from './menu.component';



@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [
    CommonModule,
    MatMenuModule,
    MatIconModule
  ],
  exports: [
    MenuComponent
  ]
})
export class MenuModule { }
