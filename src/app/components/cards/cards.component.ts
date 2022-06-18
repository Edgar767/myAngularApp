import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  @Input() title: String="card1";
  @Input() descripcion: String="card2";
  @Input() urlImage: String="card3";
  
  constructor() { }

  ngOnInit(): void {
  }

}
