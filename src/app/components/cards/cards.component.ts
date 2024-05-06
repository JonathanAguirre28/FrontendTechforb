import { Component, OnInit } from '@angular/core';
import { CardsServiceService } from 'src/app/services/cards.service.service';
import { CardData } from './interface/card.data';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  cards: CardData[] = [];

  constructor(private cardsServiceService: CardsServiceService) {}

  ngOnInit(): void {
    this.getCardsData();
  }

  getCardsData(): void {
    this.cardsServiceService.getCardsData().subscribe({
      next: (data) => {
        this.cards = data;
      }
    });
  }
}
