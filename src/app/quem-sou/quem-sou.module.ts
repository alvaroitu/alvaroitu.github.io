import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon'

import { QuemSouComponent } from './quem-sou.component';

@NgModule({
  declarations: [
    QuemSouComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    NgbModule,
    MatIconModule
  ]
})
export class QuemSouModule { }
