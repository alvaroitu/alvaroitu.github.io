import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';

import { HeaderModule } from './header/header.module';
import { MenuModule } from './menu/menu.module';
import { QuemSouModule } from './quem-sou/quem-sou.module';
import { FormacaoModule } from './formacao/formacao.module';
import { AtuacaoProfissionalModule } from './atuacao-profissional/atuacao-profissional.module';
import { AtuacaoAcademicaModule } from './atuacao-academica/atuacao-academica.module';
import { CienciaComputacaoModule } from './ciencia-computacao/ciencia-computacao.module';
import { PortifolioModule } from './portifolio/portifolio.module';
import { ConhecaItuModule } from './conheca-itu/conheca-itu.module';
import { ContatoModule } from './contato/contato.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    HeaderModule,
    MenuModule,
    QuemSouModule,
    FormacaoModule,
    AtuacaoProfissionalModule,
    AtuacaoAcademicaModule,
    CienciaComputacaoModule,
    PortifolioModule,
    ConhecaItuModule,
    ContatoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
