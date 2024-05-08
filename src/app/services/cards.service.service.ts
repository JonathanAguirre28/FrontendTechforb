import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CardData } from '../components/cards/interface/card.data';
import { environment } from 'src/enviroment';

@Injectable({
  providedIn: 'root'
})
export class CardsServiceService {
  private apiUrl: string = environment.apiUrl;


  constructor(private http: HttpClient) { }

  getCardsData(): Observable<CardData[]> {
    return this.http.get<CardData[]>(`${this.apiUrl}/alert`);
  }
}

