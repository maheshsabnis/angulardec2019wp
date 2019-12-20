import { AbstractControl } from '@angular/forms';

// the class for custom validator must have following
// 1. method must be static
// 2. if method works on value e.g. length then 
// input parameter must be standard type e.g. number
// 3. if method reads state of UI element then input
// parameter must be AbstractControl
// if data is valid then method will return 'null'
// for invlid data method will return a JSON object
// {invalid:true} or {valid:false}

export class CustomValidator {
  static checkEven(ctrl: AbstractControl): any {
      let value = ctrl.value;
      if(parseInt(value) % 2 === 0) {
        return null;
      }else{
        return {invalid:true};
      }
  }
}