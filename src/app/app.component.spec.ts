import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container mt-5">
      <div class="row">
        <div class="col-4">
          <div class="btn-group d-flex" role="group" aria-label="Basic outlined example">
            <button type="button" class="btn btn-outline-primary" (click)="decrement()">-</button>
            <button type="button" class="btn btn-outline-primary">{{ counter }}</button>
            <button type="button" class="btn btn-outline-primary" (click)="increment()">+</button>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyAngularAppName';
  counter = 0;

  increment() {
    this.counter++;
  }

  decrement() {
    this.counter--;
  }
}
