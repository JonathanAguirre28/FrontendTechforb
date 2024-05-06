import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SidenavService } from 'src/app/services/sidenav.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {
  icons!: {name: string, icon: string}[]
  constructor(private sidenavService: SidenavService, private router: Router
  ) {
    
  }
  ngOnInit(): void {
    this.sidenavService.menu.subscribe({
      next:(data) => {
        this.icons = data;
      }
    })
  }
  onIconClick(icon: { name: string, icon: string }, index: number): void {
    if (index === this.icons.length - 1) { 
      this.router.navigate(['/login']);
    }
  }
}
