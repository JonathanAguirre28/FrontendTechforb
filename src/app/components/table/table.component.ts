import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TableService } from 'src/app/services/table.service';
import { ModalService } from './services/modal.service';
import { TableData } from './interfaces/table-data';
import { DataService } from 'src/app/services/data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TableComponent implements OnInit{
  displayedColumns: string [] = ['pais', 'name', 'lecturas', 'alertasMedias', 'alertasRojas', 'acciones'];
  dataSource: TableData[] = [];
  selectedUserData: TableData | undefined;
  subscription: Subscription | undefined;

  constructor(private tableService: TableService, 
    private modalService: ModalService,
    private dataService: DataService){  }

  ngOnInit(): void {
    this.getTableData();
    this.subscription = this.dataService.getUpdateTableObservable().subscribe(() => {
      this.update();
  });
}

ngOnDestroy() {
  if (this.subscription) {
    this.subscription.unsubscribe();
  }
}

  openAddUsers() {
    this.modalService.openAddUsers();
    
  }

  getTableData() {
    this.tableService.getTableData().subscribe(data => {
      this.dataSource = data;
    });
  }
  
  OpenEditUsuers(user: TableData) {
    this.selectedUserData = user;
    this.modalService.openEditarUsuario(user);
  }
  
  deleteUsers(id: number): void {
    this.tableService.deleteUser(id).subscribe(() => {
      this.dataSource = this.dataSource.filter(user => user.id !== id);
    });
  }

  update(): void {
    this.tableService.getTableData().subscribe(data => {
      this.dataSource = data;
      this.tableService.update(this.dataSource).subscribe(() => { 
        console.log("se actualizó");
      });
    });
  }
  
}
