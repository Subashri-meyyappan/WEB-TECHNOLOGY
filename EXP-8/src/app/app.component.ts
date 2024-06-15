import { Component } from '@angular/core';
import { MyserviceService } from './myservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'demoservice';
  myname:string;
  constructor(private test:MyserviceService)
  {
    this.myname=test.getmyname();
  }
}
