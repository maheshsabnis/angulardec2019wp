import { Product } from './app.product.model';
export class ProductLogic {
  products: Array<Product>;

  constructor(){
    this.products = new Array<Product>();
    this.loadData();
  }
  private loadData(): void {
    this.products.push(new Product(101,'Laptop','Electronics','HP',230000));
    this.products.push(new Product(102,'Router','Electronics','IMB',1200));
    this.products.push(new Product(103,'Iron','Electrical','Bajaj',2300));
    this.products.push(new Product(104,'Grinder','Electrical','Godrej',4500));
    this.products.push(new Product(105,'Biscuts','Food','Parle',10));
    this.products.push(new Product(106,'ColdDrink','Food','Parle',20));
  }

  getData(): Array<Product> {
    return this.products;
  }

  saveData(prd: Product): Array<Product> {
    this.products.push(prd);
    return this.products;
  }
}
