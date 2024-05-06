import { Component } from '@angular/core';
import { SidenavService } from 'src/app/services/sidenav.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {
  icons!: {name: string, icon: string}[]
  constructor(private sidenavService: SidenavService) {
    
  }
  ngOnInit(): void {
    this.sidenavService.menu.subscribe({
      next:(data) => {
        this.icons = data;
      }
    })
  }

}
