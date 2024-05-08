import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private updateTableSubject = new Subject<void>();

  constructor() { }

  onUpdateTable() {
    this.updateTableSubject.next();
  }

  getUpdateTableObservable() {
    return this.updateTableSubject.asObservable();
  }
}
