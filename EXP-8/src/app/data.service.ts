import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  name="subashri"

  constructor() { }
  getmyname()
  {
    return this.name;
  }
}
