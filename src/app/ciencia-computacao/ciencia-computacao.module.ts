import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { CienciaComputacaoComponent } from './ciencia-computacao.component';



@NgModule({
  declarations: [
    CienciaComputacaoComponent
  ],
  imports: [
    CommonModule,
    MatCardModule
  ]
})
export class CienciaComputacaoModule { }
