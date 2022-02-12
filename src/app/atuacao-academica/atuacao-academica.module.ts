import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtuacaoAcademicaComponent } from './atuacao-academica.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';



@NgModule({
  declarations: [
    AtuacaoAcademicaComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatListModule
  ]
})
export class AtuacaoAcademicaModule { }
