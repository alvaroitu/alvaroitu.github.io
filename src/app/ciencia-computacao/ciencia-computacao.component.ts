import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ciencia-computacao',
  templateUrl: './ciencia-computacao.component.html',
  styleUrls: ['./ciencia-computacao.component.scss']
})
export class CienciaComputacaoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  voltarTopo(){
    window.scrollTo(0,0);
  }

}
