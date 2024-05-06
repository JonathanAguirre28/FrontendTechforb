import { Component, OnInit } from '@angular/core';
import { CardsServiceService } from 'src/app/services/cards.service.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  cards: { title: string, icon: string, number: string, name: string }[] = [];

  constructor(private cardsServiceService: CardsServiceService) {}

  ngOnInit(): void {
    this.getCardsData();
  }

  getCardsData(): void {
    this.cardsServiceService.getCardsData().subscribe({
      next: (data) => {
        this.cards = data;
      },
      error: (error) => {
        console.error('Error al obtener los datos de las tarjetas:', error);
      }
    });
  }
}
