import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-table-component',
  templateUrl: './app.table.view.html'
})
export class TableComponent implements OnInit {
  private dataSource:Array<any>;
  columnHeaders: Array<string>;

  // EventEmitter is an Object that will Emit an Event
  // 'any' is a generic parameter, thet represent the data to be emitted
  @Output()
  notifyBack: EventEmitter<any>; 
  constructor() {
    this.dataSource = new Array<any>();
    this.columnHeaders = new Array<string>();
    this.notifyBack = new EventEmitter<any>();
  }

  // define an Input Decorated public get/set property
  // property decorated with @Input() is used for
  // property binding [DataSource]
  @Input()
  set DataSource(value: Array<any>) {
    this.dataSource = value;
  }
  get DataSource(): Array<any> {
    return this.dataSource;
  }

  ngOnInit(): void { 
    // iterate over the 0th entry from dataSource
    // to generate Header values
    if(this.dataSource.length > 0) {
       for(let c in this.dataSource[0]) {
          this.columnHeaders.push(c);
       }
    }
  }

  // the method that will be uesed by component to emit the data
  // the emitted event must be subscribed by parent
  // parent will read the emitted data using standard $event object
  onNotifyBack(d: any): void {
    this.notifyBack.emit(d);
  }
}
