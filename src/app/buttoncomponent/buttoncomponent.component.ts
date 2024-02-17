import { Component } from '@angular/core';

@Component({
  selector: 'app-buttoncomponent',
  templateUrl: './buttoncomponent.component.html',
  styleUrls: ['./buttoncomponent.component.css']
})
export class ButtoncomponentComponent {
  counter: number = 0;

  increment() {
    this.counter++;
  }

  decrement() {
    if (this.counter > 0) {
      this.counter--;
    }
  }
}


