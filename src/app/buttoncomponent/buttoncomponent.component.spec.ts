import { Component } from '@angular/core';

@Component({
  selector: 'app-buttoncomponent',
  templateUrl: './buttoncomponent.component.html',
  styleUrls: ['./buttoncomponent.component.css']
})
export class ButtoncomponentComponent {
  counter: number = 0; // Initialize counter to 0

  increment() {
    this.counter++; // Increment counter value by 1
  }

  decrement() {
    if (this.counter > 0) {
      this.counter--; // Decrement counter value by 1, but ensure it doesn't go below 0
    }
  }
}
