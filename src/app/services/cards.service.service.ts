import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CardData } from '../components/cards/interface/card.data';

@Injectable({
  providedIn: 'root'
})
export class CardsServiceService {
  private Url:string = 'http://localhost:8080/alert';

  constructor(private http: HttpClient) { }

  getCardsData(): Observable<CardData[]> {
    return this.http.get<CardData[]>(this.Url);
  }
}

