import { Component, OnInit } from '@angular/core';
import { SensorsData } from './interface/sensors-data';
import { FooterService } from 'src/app/services/footer.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit{
sensors: SensorsData[] = [];

constructor(private footerService: FooterService) {}

ngOnInit(): void {
    this.getSensorsData();
}

getSensorsData(): void {
  this.footerService.getSensorData().subscribe({
    next: (data) => {
      this.sensors = data;
    }
  });
}
}
