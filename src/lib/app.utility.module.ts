import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './services/app.http.service';

@NgModule({
   imports:[HttpClientModule], // resolve the HttpClient class
   providers:[HttpService] // HttpService will be registered in DI UtilityModule
})
export class UtilityModule {
}