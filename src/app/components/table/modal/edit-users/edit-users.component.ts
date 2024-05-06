import { Component, ViewEncapsulation, Inject } from '@angular/core';
import { ModalService } from '../../services/modal.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TableService } from 'src/app/services/table.service';
import { DIALOG_DATA } from '@angular/cdk/dialog';
import { TableData } from '../../interfaces/table-data';

@Component({
  selector: 'app-edit-users',
  templateUrl: './edit-users.component.html',
  styleUrls: ['./edit-users.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EditUsersComponent {
  form: FormGroup;
  element: any;

  constructor(private modalService: ModalService,
   private fb: FormBuilder,
   private tableService: TableService,
   @Inject(DIALOG_DATA) public data: TableData){
    console.log("data", data);

    this.form = this.fb.group({
    name: [this.data.name, Validators.required],
    country: [this.data.country, Validators.required],
    readings: [this.data.readings, Validators.required],
    mediumAlerts: [this.data.mediumAlerts, Validators.required],
    redAlerts: [this.data.redAlerts, Validators.required]
     })
   }
 
   editarUsuario(): void { 
    const plant = {
      icon: this.form.get("country")?.value,
      country: this.form.get("country")?.value,
      name: this.form.get("name")?.value,
      readings: this.form.get("readings")?.value,
      mediumAlerts: this.form.get("mediumAlerts")?.value,
      redAlerts: this.form.get("redAlerts")?.value,
      iconActions: "actions"
    }
    this.tableService.editarUsuario(this.data.id ? this.data.id : 0, plant).subscribe((res) => 
    {
      this.modalService.closeModal();
    })
   }

   closeModal(){
    this.modalService.closeModal();
  }
}
