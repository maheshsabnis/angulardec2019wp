import {Component} from '@angular/core';

@Component({
   selector: 'app-simple-component',
   templateUrl: './app.simple.view.html'
})
export class SimpleComponent {
  message: string;
  name: string;
  constructor() {
    this.message = "The Simple Component";
    this.name = "";
  }

  display(): void {
    this.message = 'I amd Changed';
  }
}