import { Component, OnInit } from '@angular/core';

import * as $ from "jquery";


@Component({
  selector: 'app-portifolio',
  templateUrl: './portifolio.component.html',
  styleUrls: ['./portifolio.component.scss']
})
export class PortifolioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  voltarTopo(){
    window.scrollTo(0,0);
  }

  

}
