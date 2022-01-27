import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { QuemSouComponent } from './quem-sou/quem-sou.component';
import { FormacaoComponent } from './formacao/formacao.component';
import { AtuacaoProfissionalComponent } from './atuacao-profissional/atuacao-profissional.component';
import { AtuacaoAcademicaComponent } from './atuacao-academica/atuacao-academica.component';
import { CienciaComputacaoComponent } from './ciencia-computacao/ciencia-computacao.component';
import { PortifolioComponent } from './portifolio/portifolio.component';
import { ConhecaItuComponent } from './conheca-itu/conheca-itu.component';
import { ContatoComponent } from './contato/contato.component';

const routes: Routes = [
  { path: '', component: QuemSouComponent },
  { path: 'formacao', component: FormacaoComponent },
  { path: 'atuacaoProfissional', component: AtuacaoProfissionalComponent },
  { path: 'atuacaoAcademica', component: AtuacaoAcademicaComponent },
  { path: 'cienciaComputacao', component: CienciaComputacaoComponent },
  { path: 'portifolio', component: PortifolioComponent },
  { path: 'conhecaItu', component: ConhecaItuComponent },
  { path: 'contato', component: ContatoComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
