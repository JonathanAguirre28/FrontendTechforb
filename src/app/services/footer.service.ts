import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SensorsData } from '../components/footer/interface/sensors-data';
import { Observable } from 'rxjs';
import { environment } from 'src/enviroment';

@Injectable({
  providedIn: 'root'
})
export class FooterService {
  private apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getSensorData(): Observable<SensorsData[]> {
    return this.http.get<SensorsData[]>(`${this.apiUrl}/sensors`);
  }
}
