// import standard and custom modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// the FormModule is needed for ngModel for Two-Way binding
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SimpleComponent } from './components/simplecomponent/app.simple.component';
import { ProductFormComponent } from './components/prouctformcomponent/app.productform.component';
import { ProductReactiveFormComponent } from './components/prouctreactiveformcomponent/app.productreactiveform.component';
import { TableComponent } from './components/tablecomponent/app.table.component';
import { CategoryComponent } from './components/categoryComponent/app.category.component';
import { ProductComponent } from './components/productcomponent/app.product.component';
import { UtilityModule } from './../lib/app.utility.module';
import { HttpCallComponent } from './components/httpservicecallcomponent/app.httpcall.component';
import { HomeComponent } from './components/routingapp/app.home.component';
import { AboutComponent } from './components/routingapp/app.about.component';
import { ContactComponent } from './components/routingapp/app.contact.component';
import { MainComponent } from './components/routingapp/app.main.component';
import { ColorDirective } from './components/customdirectivecomponent/app.color.directive';
import { DirectiveComponent } from './components/customdirectivecomponent/app.directive.component';
import { PipeComponent } from './components/pipecomponent/app.pipe.component';

// declarations: of the tye array, declare all components, directives and
// pipes for the current Angular application
// imports:  of the tye array, imports all standard and custom external modules
// required for current Angular module to execute
// providers: of the tye array, provides DI container for Angular Services
// bootstrap: of the tye array, conatins component(s) to bootstrap when the
// application is loaded in browser
@NgModule({
  declarations: [
    AppComponent, SimpleComponent, ProductFormComponent,
    ProductReactiveFormComponent, TableComponent,
    CategoryComponent, ProductComponent, HttpCallComponent,
    HomeComponent, AboutComponent, ContactComponent, MainComponent,
    ColorDirective, DirectiveComponent,
    PipeComponent
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule,
    AppRoutingModule, UtilityModule
  ],
  providers: [],
  bootstrap: [ProductFormComponent]
})
export class AppModule { }
