import { Component, OnInit } from '@angular/core';

import * as $ from "jquery";


@Component({
  selector: 'app-atuacao-academica',
  templateUrl: './atuacao-academica.component.html',
  styleUrls: ['./atuacao-academica.component.scss']
})
export class AtuacaoAcademicaComponent implements OnInit {

  atividadesCeunsp2121 = [
    'Tecnologias utilizadas.',
    '- HTML',
    '- CSS',
    '- JavaScript',
    '- Angular',
    '- Java',
    '- Spring',
    '- H2DataBase'
  ]

  atividadesCeunsp2021 = [
    '- Estudo sobre o tema em livros, artigos e internet.'
  ]

  atividadesCeunsp1920 = [
    '- Estudo sobre o tema em livros, artigos e internet.'
  ]

  atividadesCeunsp1819 = [
    'Tecnologias utilizadas.',
    '- HTML',
    '- CSS',
    '- JavaScript',  
    '- PHP',
    '- MySQL'    
  ]
  
  atividadesUSP = [
    '- Estudo do Geóide Gravimétrico',
    
  ]

  atividadesUNESP = [
    '- Estudo de Filmes Ultrafinos de Ligninas'
  ] 

  constructor() { }

  ngOnInit(): void {
  }

  voltarTopo(){
    window.scrollTo(0,0);
  }

}
