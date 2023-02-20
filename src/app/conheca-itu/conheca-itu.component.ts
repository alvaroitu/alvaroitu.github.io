import { Component, OnInit } from '@angular/core';

import * as $ from "jquery";

@Component({
  selector: 'app-conheca-itu',
  templateUrl: './conheca-itu.component.html',
  styleUrls: ['./conheca-itu.component.scss']
})
export class ConhecaItuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  voltarTopo(){
    window.scrollTo(0,0);
  }

}
