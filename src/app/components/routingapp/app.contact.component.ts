import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-component',
  template: `
    <h2>I am Contact Component</h2>
    <div>{{message}}</div>
    <br/>
    <a [routerLink]="['product']">Product</a>
    <br/>
    <router-outlet></router-outlet>
  ` 
})
export class ContactComponent implements OnInit {
  message: string;
  constructor() { 
    this.message = 'I am Contact Component';
  }
  ngOnInit(): void { }
}
