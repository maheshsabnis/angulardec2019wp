 import { Injectable, EventEmitter} from '@angular/core';
// ANGULAR 4+ 
// the providedIn:root property for Injectable
// to inject the service ByDefault in Application
// root in app.module.ts
@Injectable({
  providedIn: 'root'
})
export class CommunicationService {
  // the data that will be a payload
   data: string;
   // declare the EventEmitter that will be
   // used by sender to send data 
   // and by receiver to recive data on subscription
   notoifyMe: EventEmitter<string>; 
   constructor(){
     this.data = '';
     this.notoifyMe = new EventEmitter<string>();
   }

   // a public method that will be invoked
   // by sender component to send data
   // this method will emit event

   onSend(value: string): void {
      this.data = value;
      this.notoifyMe.emit(this.data);
   }
}