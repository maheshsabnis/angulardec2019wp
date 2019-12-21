import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../lib/services/app.http.service';
import { ProductRec } from '../../models/app.productrec.model';

@Component({
  selector: 'app-httpcall-component',
  template: `
    <h2>Perform HTTP Calls</h2>
    <input type="button"  value="Get Data" class="btn btn-warning" (click)="getData()">
    <br>
    <input type="button"  value="Post Data" class="btn btn-success" (click)="postData()">
    <hr/>
    <div>{{responseString}}</div>

  ` 
})
export class HttpCallComponent implements OnInit {
  responseString: string;
  // inject the Service
  constructor(private serv: HttpService) { 
    this.responseString = '';
  }

  ngOnInit(): void { }
  getData(): void {
    this.serv.getData().subscribe((resp) => {
      this.responseString = JSON.stringify(resp);
    }, (error) => {
      this.responseString = `Error Occures ${error}`
    });
  }
  postData(): void {
    let prd: ProductRec = new ProductRec(
       0, 'Prd1007', 'Router', 'Electronics', 'HP', '100GB/S', 1000
    );
    this.serv.postData(prd).subscribe((resp) => {
      this.responseString = JSON.stringify(resp);
    }, (error) => {
      this.responseString = `Error Occures ${error}`
    });
  }
}
