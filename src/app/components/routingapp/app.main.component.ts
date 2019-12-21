import { Component, OnInit } from '@angular/core';
// the [routerLink] --> attribute Directive to query the router table
// e.g. [routerLink]="['<PATH-FROM-ROUTE-TABLE>', route-parameters]"
// the <router-outlet></router-outlet>, a component, that will render
// components queries using [routerLink]
@Component({
  selector: 'app-main-component',
  template: `
    <table class="table table-bordered table-striped">
        <tr>
          <td>
             <a [routerLink]="['']">Home</a>
          </td>
          <td>
             <a [routerLink]="['/about', id]">About</a>
          </td>
          <td>
             <a [routerLink]="['contact']">Contact</a>
          </td>
        </tr>
    </table>
    <br>
    <router-outlet></router-outlet>
  ` 
})
export class MainComponent implements OnInit {
  id: number;
  constructor() { 
    this.id  = 100;
  }

  ngOnInit(): void { }
}
