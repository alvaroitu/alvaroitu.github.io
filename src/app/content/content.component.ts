import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

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

}
