import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { TableData } from '../components/table/interfaces/table-data';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/enviroment';

@Injectable({
  providedIn: 'root'
})
export class TableService {
  private apiUrl: string = environment.apiUrl;
  private dataSubject: Subject<TableData[]> = new Subject<TableData[]>();

  constructor(private http: HttpClient) { }

  getTableData(): Observable<TableData[]> {
    return this.http.get<TableData[]>(`${this.apiUrl}/plants`);
  }

  addUsers(user: TableData): Observable<Object> {
    return this.http.post(`${this.apiUrl}/plants`, user);
  }
  
  deleteUser(id: number): Observable<Object> {
    return this.http.delete(`${this.apiUrl}/plants/${id}`);
  }  

  editUser(id: number, user: TableData): Observable<Object> {
    return this.http.put(`${this.apiUrl}/plants/${id}`, user);
  }

  update(updatedData: TableData[]): Observable<Object> {
    return this.http.put(`${this.apiUrl}/plants`, updatedData);
  }
}
