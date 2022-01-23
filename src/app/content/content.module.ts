import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatCardModule} from '@angular/material/card';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';



import { ContentComponent } from './content.component';



@NgModule({
  declarations: [
    ContentComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    NgbModule
  ],
  exports: [
    ContentComponent
  ]
})
export class ContentModule { }
