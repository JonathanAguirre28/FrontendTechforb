import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  constructor() { }

  header = of (
    [
      {
        name:"vector",
        icon:"vector.png"
      },
      {
        name:"setting",
        icon:"setting.png"
      },
      {
        name:"notification",
        icon:"notification.png"
      }
    ]
  );
}
