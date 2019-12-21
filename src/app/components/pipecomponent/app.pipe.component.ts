import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-component',
  template: `
    <div>{{bDate}}</div>
    <br/>
    <div>{{bDate| date: 'fullDate'}}</div>
    <br/>
    <div>{{bDate| date: 'shortDate'}}</div>
    <br/>
    <div>{{bDate| date: 'dd/MM/yyyy'}}</div>
    <br/>
    <div>{{obj|json}}</div>
  ` 
})
export class PipeComponent implements OnInit {
  
  bDate: Date;
  obj: Object;
  constructor() {
    this.bDate = new Date(2019,11,21);
    this.obj = {
       EmpNo:101,
       EmpName: 'ABC'
    };
   }

  ngOnInit(): void { }
}
