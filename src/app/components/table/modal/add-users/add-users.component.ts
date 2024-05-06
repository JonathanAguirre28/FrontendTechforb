import { Component, EventEmitter, Output, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TableService } from 'src/app/services/table.service';
import { ModalService } from '../../services/modal.service';
import { TableData } from '../../interfaces/table-data';

@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AddUsersComponent {
  paises: string [] = ['Argentina','Paraguay','Uruguay','Brasil'];
  form: FormGroup;
  @Output() userAdded: EventEmitter<void> = new EventEmitter<void>();

  constructor(private fb: FormBuilder, 
    private tableService: TableService,
    private modalService: ModalService,){

    this.form = this.fb.group({
      name: ['', Validators.required],
      pais:['', Validators.required],
    });
  }

  createUser() {
    const plant = {
      icon: this.form.get("pais")?.value,
      country: this.form.get("pais")?.value,
      name: this.form.get("name")?.value,
      readings: 0,
      mediumAlerts: 0,
      redAlerts: 0
  }
    this.tableService.addUsers(plant).subscribe(
      (res) => { 
      this.modalService.closeModal();
      this.userAdded.emit();
      },
      (error) => {console.log(error)}
    )
  }


    closeModal(){
      this.modalService.closeModal();
    }
  }


