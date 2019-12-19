import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/app.product.model';
import { ProductLogic } from '../../models/app.product.logic';
import { Categories, Manufacturers } from './../../models/app.constants';

@Component({
  selector: 'app-productform-component',
  templateUrl: './app.productform.view.html'
})
export class ProductFormComponent implements OnInit {
  product: Product;
  products: Array<Product>;
  private logic: ProductLogic;

  // store constants in local public declarations
  categories = Categories;
  manufacturers = Manufacturers;
  tableHeaders: Array<string>;
  constructor() { 
    this.product = new Product(0, '', '' , '', 0);
    this.products = new Array<Product>();
    this.logic = new ProductLogic();
    this.tableHeaders = new Array<string>();
    console.log('Constructor Called');
  }

  // implicitely invoked immediately after constructor
  ngOnInit(): void {
    console.log('NG ON INIT Called');
    // iterate over the profuct object to read its properties
    for(let p in this.product) { // Object.keys()
       this.tableHeaders.push(p);
    }
    this.products = this.logic.getData();
  }

  clear(): void {
    this.product = new Product(0, '', '' , '', 0);
  }
  save(): void {
    this.products = this.logic.saveData(this.product);
  }
  getSelectedProduct(prd: Product): void {
    // Object.assing() will create a blank object
    // data from prd will be copied into it
    // the blank object will be assigned to this.product
    this.product  = Object.assign({},prd);
  }
}
