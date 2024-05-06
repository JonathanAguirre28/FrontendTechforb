import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardsServiceService {
  private apiUrl = 'http://localhost:8080/alert';

  constructor(private http: HttpClient) { }

  getCardsData(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}

