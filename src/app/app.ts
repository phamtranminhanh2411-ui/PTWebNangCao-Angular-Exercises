import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  title = 'my-app';
  data = 'Sample Text';
  dataFromChild: any;
}