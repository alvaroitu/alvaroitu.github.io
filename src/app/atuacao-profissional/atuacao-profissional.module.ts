import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { AtuacaoProfissionalComponent } from './atuacao-profissional.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    AtuacaoProfissionalComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    NgbModule,
    MatListModule
    
    
  ]
})
export class AtuacaoProfissionalModule { }
