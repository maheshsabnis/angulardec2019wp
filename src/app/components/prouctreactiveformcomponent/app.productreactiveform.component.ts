import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Product } from '../../models/app.product.model';
import { ProductLogic } from '../../models/app.product.logic';
import { Categories, Manufacturers } from '../../models/app.constants';
import { CustomValidator } from './app.custom.validator';
@Component({
  selector: 'app-productreactiveform-component',
  templateUrl: './app.productreactiveform.view.html'
})
export class ProductReactiveFormComponent implements OnInit {
  product: Product;
  products: Array<Product>;
  private logic: ProductLogic;

  // store constants in local public declarations
  categories = Categories;
  manufacturers = Manufacturers;
  tableHeaders: Array<string>;
  // define the FormGroup
  frmProduct: FormGroup;
  constructor() { 
    this.product = new Product(0, '', '' , '', 0);
    this.products = new Array<Product>();
    this.logic = new ProductLogic();
    this.tableHeaders = new Array<string>();

    // map the formGroup with Model class which will be
    // mapped with form-fields aka form-elements
    // using FormControl class
    this.frmProduct = new FormGroup({
      ProductId: new FormControl(this.product.ProductId,
        Validators.compose([Validators.required, 
          Validators.minLength(2),
        Validators.maxLength(8),
      Validators.pattern('[0-9]+'),
    CustomValidator.checkEven])),
      ProductName: new FormControl(this.product.ProductName),
      CatName: new FormControl(this.product.CatName),
      Manufacturer: new FormControl(this.product.Manufacturer),
      Price: new FormControl(this.product.Price)
    }); 

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
    // read the data from the formGroup
    this.product = this.frmProduct.value;
    this.products = this.logic.saveData(this.product);
  }
  getSelectedProduct(prd: Product): void {
    // Object.assing() will create a blank object
    // data from prd will be copied into it
    // the blank object will be assigned to this.product
    this.product  = Object.assign({},prd);
  }

  // method that will be subscibe to notifyBack event
  receiveData($event: any): void {
      console.log(`Received data from child is ${JSON.stringify($event)}`);
      this.product = $event;
      this.frmProduct.setValue(this.product);
  }
}
