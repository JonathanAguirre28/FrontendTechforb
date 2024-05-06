import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { TableData } from '../components/table/interfaces/table-data';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  private Url:string = 'http://localhost:8080/plants';
  private dataSubject: Subject<TableData[]> = new Subject<TableData[]>();

  constructor(private http: HttpClient) { }

  getTableData(): Observable<TableData[]> {
    return this.http.get<TableData[]>(this.Url);
  }

  addUsers(user: TableData): Observable<any> {
    return this.http.post(this.Url, user);
  }
  
  eliminarUsuario(id: number): Observable<any> {
    return this.http.delete(`${this.Url}/${id}`);
  }

  editarUsuario(id: number, user: TableData): Observable<any> {
    return this.http.put(`${this.Url}/${id}`, user);
  }
  
}
