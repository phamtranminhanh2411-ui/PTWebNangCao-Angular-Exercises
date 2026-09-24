import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: false,
  templateUrl: './child.html',
  styleUrls: ['./child.css'],
})
export class ChildComponent implements OnInit {
  @Input('parentData') public data: any;
  @Output() public childEvent = new EventEmitter();
  public framework = 'angular';

  constructor() {}

  ngOnInit(): void {}

  sendData(): void {
    const beerInfo = {
      name: 'Heniken',
      price: 19000,
    };
    this.childEvent.emit(beerInfo);
  }
}