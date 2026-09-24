import { Component } from '@angular/core';

@Component({
  selector: 'app-binding-event-component',
  standalone: false,
  templateUrl: './binding-event-component.html',
  styleUrl: './binding-event-component.css',
})
export class BindingEventComponent {
  public hsa:number=5
  public hsb:number=10

  giaipt(hsa: any, hsb: any, view: HTMLElement) {
    let a = parseFloat(hsa);
    let b = parseFloat(hsb);
    if (a == 0 && b == 0) {
      view.innerHTML = 'Vo so nghiem';
    } else if (a == 0 && b != 0) {
      view.innerHTML = 'Vo nghiem';
    } else {
      view.innerHTML = 'x=' + -b / a;
    }
  }


  //store the name of product
  productName: string = "Laptop";
  //handler for click event
  onSave(): void {
    console.log('Saving product: ' + this.productName);
    alert('Saving product: ' + this.productName);
    //logic to call api or process data goes here
}
//handler for input event, capturing user keystrokes
onInputChange(event: Event): void {
  //cast event target to HTMLInputElement to access value property
  const inputElement = event.target as HTMLInputElement;
  this.productName = inputElement.value;
}
}
