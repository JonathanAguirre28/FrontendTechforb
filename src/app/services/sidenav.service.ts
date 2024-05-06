import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidenavService {

  constructor() { }

  menu = of (
    [
      {
        name: "circule",
        icon: "circule.png"
      },
      {
        name: "world",
        icon: "world.png"
      },
      {
        name: "camera",
        icon: "camera.png"
      },
      {
        name: "sensors",
        icon: "sensors.png"
      },
      {
        name: "nuclear-plant",
        icon: "nuclear-plant.png",
      },
      {
        name: "logout",
        icon: "logout.png"
      }
    ]);
}
