import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContatoComponent } from './contato.component';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [
    ContatoComponent
  ],
  imports: [
    CommonModule,
    MatCardModule
  ]
})
export class ContatoModule { }
