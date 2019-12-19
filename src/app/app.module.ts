// import standard and custom modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// the FormModule is needed for ngModel for Two-Way binding
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SimpleComponent } from './components/simplecomponent/app.simple.component';

// declarations: of the tye array, declare all components, directives and
// pipes for the current Angular application
// imports:  of the tye array, imports all standard and custom external modules
// required for current Angular module to execute
// providers: of the tye array, provides DI container for Angular Services
// bootstrap: of the tye array, conatins component(s) to bootstrap when the
// application is loaded in browser
@NgModule({
  declarations: [
    AppComponent, SimpleComponent
  ],
  imports: [
    BrowserModule, FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [SimpleComponent]
})
export class AppModule { }
