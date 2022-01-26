import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormacaoComponent } from './formacao.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    FormacaoComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    NgbModule,
    MatIconModule
  ]
})
export class FormacaoModule { }
