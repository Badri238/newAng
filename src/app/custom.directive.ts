import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCustom]'
})
export class CustomDirective {

  constructor(private ele : ElementRef) { }


  @HostListener("mouseenter")
  onClick(): void{
    this.ele.nativeElement.style.color = "blue"
  }
}
