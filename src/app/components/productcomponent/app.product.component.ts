import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/app.product.model';
import { ProductLogic } from '../../models/app.product.logic';
import { CommunicationService } from '../../../lib/services/app.coomunication.service';

@Component({
  selector: 'app-product-component',
  templateUrl: './app.product.view.html' 
})
export class ProductComponent implements OnInit {
  products: Array<Product>;
  private logic: ProductLogic;
  CatName: string;
  private filterProducts: Array<Product>;
  // service injected in the ProductComponent 
  constructor(private serv: CommunicationService) { 
    this.products = new Array<Product>();
    this.logic = new ProductLogic();
    this.CatName = "";
    this.filterProducts = new Array<Product>();
  }

  ngOnInit(): void { 
    // subscribe to the event from the CommunicationService
    this.serv.notoifyMe.subscribe((data:string) => {
        this.CatName = data; // receing the data from Event Subscription
        console.log(`Received data ${this.CatName}`);
    });
    this.products = this.logic.getData();
  }

  // read-only property that will filter Products data based on CatName
  // 
  get FilterProducts(): Array<Product> {
    this.filterProducts = new Array<Product>();
    if(this.CatName.length > 0){
       this.filterProducts = this.products.filter((p,i) => {
          return p.CatName === this.CatName;
       });
    }else {
      this.filterProducts = this.products;
    }
    return this.filterProducts;
  }  
}
