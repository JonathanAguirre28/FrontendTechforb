import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TableService } from 'src/app/services/table.service';
import { ModalService } from './services/modal.service';
import { TableData } from './interfaces/table-data';

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
  
  constructor(private tableService: TableService, 
    private modalService: ModalService,){  }

  ngOnInit(): void {
    this.getTableData();
  }
  
  openAddUsers() {
    this.modalService.openAddUsers();
  }

  handleUserAdded() {
    this.getTableData(); 
    console.log("actualiza", this.handleUserAdded())
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
    this.tableService.eliminarUsuario(id).subscribe(() => {
      this.dataSource = this.dataSource.filter(user => user.id !== id);
    });
  }
}
