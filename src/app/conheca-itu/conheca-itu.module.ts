import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConhecaItuComponent } from './conheca-itu.component';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [
    ConhecaItuComponent
  ],
  imports: [
    CommonModule,
    MatCardModule
  ]
})
export class ConhecaItuModule { }
