import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  images = ['AlvaroBogota.jpg', 'AlvaroChapeu1.jpg','AlvaroChapeu2.jpg'].map((n) => `./assets/images/pessoal/${n}`);

  constructor() { }

  ngOnInit(): void {
  }

}
