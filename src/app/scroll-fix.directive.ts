import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[scrollFix]'
})
export class ScrollFixDirective {

  constructor(private _elementRef : ElementRef) { }

  @HostListener('window:scroll', ['$event'])
  doSomething(event) {
    console.log(document.body.scrollTop);
    if (document.body.scrollTop > 400) {
      this._elementRef.nativeElement.classList.remove('chat-scrolling');
      this._elementRef.nativeElement.classList.add('chat-stick');
    } else {
      this._elementRef.nativeElement.classList.remove('chat-stick');
      this._elementRef.nativeElement.classList.add('chat-scrolling');
    }
  }

}
