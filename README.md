# MyNgApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.20.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

## To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

1. @angular/core
   1. Core Module repository for Angular Application
      1. NgModule, Component, Injectable, Pipe, Directive
      2. Input, Output, EventEmitter<T>, HostListener
      3. ElementRef, Renderer
2. @angular/platform-browser
   1. Provides 'BrowserModule', loads NG application inside Browser Object Model
3. @angular/platform-browser-dynamic
   1. Provides 'platformBrowserDynamic()' method, to bootstrap Angular Module inside the browser
4. @angular/forms
   1. For Angular Forms
      1. FormsModule for Two-Way binding using ngModel
      2. ReactiveFormsModule, Model-Driven / Reactive Forms
5. @angular/compiler
   1. AOT and JIT with Ivy
6. @angular/common
   1. Provides 'CommonModule' for Libraries or External Module loading in current application
   2. @angular/common/http
      1. Provides HttpClientModule for Http Calls
7. @angular/router
   1. Provides RouterModule
8. @angular/animation

Angular Expternal Dependencies

1. rxjs
2. zone.js
3. tslib
   1. Uses ES 6 / ES 7 standard object mapping with browser

---

Directives

1. Component
   1. Each component is directive
2. Structural Directive
   1. Dynamically Add/Remove DOM
      1. \*ngFor --> for..of loop
      2. \*ngIf --> If Condition
      3. \*ngSwitch--ngSwitchCase
3. Attribute
   1. Behavior of HTML Element e.g. ngModel

==============================================================
1. @angular/common/http
   1. HttpClientModule
      1. Platform for Http Communication
         1. Classes
            1. HttpClient
               1. get<T>/post<T>/put<T>/delete<T>/purge<T>/merge<T>
                  1. T can be premptive type
                  2. T can class
                  3. JSON/XML/Text/BLOB/ArrayBuffer
            2. HttpHeaders
               1. Used by POST/PUT Requests
                  1. Content-Type
                  2. Authorization
            3. HttpInteceptors
               1. Common class that will be used to add headers for every http request

------------------------------------------------------------------------------
Directives
1. Reusable UI Elements or attributes of UI elements those will be in action or activated when specific event(s) are fired
2. Component Directives
3. Structural Directives
4. Attribute Directives
   1. Activated based on Events
5. Custom Attribute Directives
   1. Class decorated with @Directive({selector:'[]'})
   2. UI Requirements
      1. ElementRef --> @angular/core, instantiated using BrowserModule
         1. Modify the Exisiting UI
      2. Renderer / Renderer2  --> @angular/core , instantiated using BrowserModule
         1. Define Rendering for UI 
   3. Data Binding Requirements
      1. Define public properties decoarated usign @Input()
   4. Logic
      1. Directive Spcific Logic
   5. Events
      1. List of Events, used and hosted by directive to activate it
      2. @HostListener Decorator
         1. Applied on Logic method to invoke it when the event is fired
         2. @HostListener('<NAME-OF-EVENT>')method1()


-----------------------------------------------------------------------------
Pipes
1. The Text-Based Interpolation Transformation of data
2. The class that is decorated with @Pipe decorator
3. This class implements IPipeTransform interface and implements is transform() method
   1. uppercase
   2. lowercase
   3. currency
      1. Symbol:true
   4. fulldate
   5. shortdate
   6. json
4. {{PROPERTY|<PIPE-NAME>:<PARAMETERS>}}
