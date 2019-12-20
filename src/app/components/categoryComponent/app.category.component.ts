import { Component, OnInit } from '@angular/core';
import { Category } from '../../models/app.categoey.model';
import { CommunicationService } from './../../../lib/services/app.coomunication.service'; 
@Component({
  selector: 'app-category-component',
  templateUrl: './app.category.view.html'
})
export class CategoryComponent implements OnInit {
  categories: Array<Category>;
  // inject the service in comoponent

  constructor(private serv: CommunicationService) { 
    this.categories = new Array<Category>();
  }

  ngOnInit(): void { 
    this.categories.push(new Category(101, 'Electronics', 100));
    this.categories.push(new Category(102, 'Electrical', 200));
    this.categories.push(new Category(103, 'Food', 300));
  }

  getSelectedCategory(catName: string): void {
     // call the method to service and 
     // pass the catName to it
     this.serv.onSend(catName);
  }
}
