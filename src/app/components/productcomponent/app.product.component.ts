import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/app.product.model';
import { ProductLogic } from '../../models/app.product.logic';

@Component({
  selector: 'app-product-component',
  templateUrl: './app.product.view.html' 
})
export class ProductComponent implements OnInit {
  products: Array<Product>;
  private logic: ProductLogic;
  constructor() { 
    this.products = new Array<Product>();
    this.logic = new ProductLogic();
  }

  ngOnInit(): void { 
    this.products = this.logic.getData();
  }
}
