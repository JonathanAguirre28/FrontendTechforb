import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SensorsData } from '../components/footer/interface/sensors-data';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FooterService {
  private Url:string = 'http://localhost:8080/sensors';

  constructor(private http: HttpClient) { }

  getSensorData(): Observable<SensorsData[]> {
    return this.http.get<SensorsData[]>(this.Url);
  }
}
