import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() origen: string = '';
  @Input() nombre: string = '';
  @Input() estado: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  getImg(estado: boolean) {
    if (this.origen === 'recursos') {
      return estado ? 'recurso-disponible' : 'recurso-no-disponible';
    }
    return estado ? 'rol-disponible' : 'rol-no-disponible';
  }
}
