import { Component, OnInit } from '@angular/core';
// the Router class will provide explicit routing navigation 
// the ActivatedRoute, the class that provides Parameter
// subscription for the current active route expression
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-about-component',
  template: `
    <h2>I am About Component</h2>
    <div>{{message}}</div>
    <br/>
    <input type="button" value="Navigate To Contact" (click)="navigateToContact()"/>
  ` 
})
export class AboutComponent implements OnInit {
  message: string;
  // inject Router, this will be resolved by RouterModule 
  constructor(private router: Router, private act: ActivatedRoute) { 
    this.message = 'I am About Component';
  }

  ngOnInit(): void { 
    // subscribe to the parameter from Route
    this.act.params.subscribe((p) => {
      this.message += p.id; // id is the parameter 
    });

  }
  navigateToContact(): void {
      this.router.navigate(['contact']);
  }
}
