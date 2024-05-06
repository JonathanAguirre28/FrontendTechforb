import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddUsersComponent } from '../modal/add-users/add-users.component';
import { TableService } from 'src/app/services/table.service';
import { EditUsersComponent } from '../modal/edit-users/edit-users.component';
import { TableData } from '../interfaces/table-data';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(private matDialog: MatDialog, 
    private tableService: TableService) { }

  openAddUsers() {
    this.matDialog.open(AddUsersComponent)
  }

  closeModal(){
    this.matDialog.closeAll();
  }

  openEditarUsuario(user: TableData) {
    this.matDialog.open(EditUsersComponent,{
      data: user
    });
  }
}