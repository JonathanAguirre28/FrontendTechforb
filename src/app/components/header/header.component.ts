import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/services/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{

  icons!: {name: string, icon: string}[]
  constructor(private headerService: HeaderService){}

  ngOnInit(): void {
    this.headerService.header.subscribe({
      next:(data) => {
        this.icons = data;
      }
    })
  }

}
