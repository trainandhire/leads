import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appImp]'
})
export class ImpDirective {

  constructor(private elementRef: ElementRef) {

    this.elementRef.nativeElement.style.backgroundColor = 'red';

  }

}
