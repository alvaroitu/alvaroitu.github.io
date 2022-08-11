import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortifolioComponent } from './portifolio.component';
import { MatCardModule } from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';




@NgModule({
  declarations: [
    PortifolioComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatGridListModule
  ]
})
export class PortifolioModule { }
