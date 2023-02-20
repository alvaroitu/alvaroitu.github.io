import { Component, OnInit } from '@angular/core';

import * as $ from "jquery";

@Component({
  selector: 'app-quem-sou',
  templateUrl: './quem-sou.component.html',
  styleUrls: ['./quem-sou.component.scss']
})
export class QuemSouComponent implements OnInit {

  images = ['2AlvaroLinkedin2.jpg',
            '3AlvaroBogota.jpg',
            '4AviaoGeofisica.jpg',
            '5AlvaroOperaHouse1.jpg',
            '6AlvaroKoala1.jpg',
            '7AlvaroPraia1.jpg',
            '8AlvaroChapeu1.jpg',
            '9AlvaroChapeu2.jpg',
            '10AlvaroChapeu3.jpg',
            '11AlvaroChapeu4.jpg'].map((n) => `./assets/images/pessoal/${n}`);

  constructor() { }

  ngOnInit(): void {
  }

  voltarTopo(){
    window.scrollTo(0,0);
  }

}
