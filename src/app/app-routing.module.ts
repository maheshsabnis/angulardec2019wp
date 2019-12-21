import { NgModule } from '@angular/core';
// RouterModule --> Platform for Routing
// Routes --> Define the Route Table
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/routingapp/app.home.component';
import { AboutComponent } from './components/routingapp/app.about.component';
import { ContactComponent } from './components/routingapp/app.contact.component';
import { ProductFormComponent } from './components/prouctformcomponent/app.productform.component';

// define the route table as follows
// { path:'uri', component:Name-of-the-component, children:[child-routes] }
const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about/:id', component: AboutComponent},
  {path: 'contact', component: ContactComponent, 
    children:[
      {path:'product', component: ProductFormComponent}]
    },
  {path:'**', redirectTo:''} // no match found then goto Home
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // register the route table in root scope
  exports: [RouterModule] // export routing so that the root application 
    // will use all its features*
})
export class AppRoutingModule { }
