import { Component, OnInit } from '@angular/core';
import { Category } from '../../models/app.categoey.model';
 
@Component({
  selector: 'app-category-component',
  templateUrl: './app.category.view.html'
})
export class CategoryComponent implements OnInit {
  categories: Array<Category>;
  constructor() { 
    this.categories = new Array<Category>();
  }

  ngOnInit(): void { 
    this.categories.push(new Category(101, 'Electronics', 100));
    this.categories.push(new Category(102, 'Electrical', 200));
    this.categories.push(new Category(103, 'Food', 300));
  }
}
