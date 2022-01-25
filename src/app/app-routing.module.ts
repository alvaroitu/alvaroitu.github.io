import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { FormacaoComponent } from './formacao/formacao.component';

const routes: Routes = [
  { path: '', component: ContentComponent},
  { path: 'formacao', component: FormacaoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
