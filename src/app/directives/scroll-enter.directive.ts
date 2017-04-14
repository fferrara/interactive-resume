import {Directive, ElementRef, HostListener, Input, Renderer} from '@angular/core';

@Directive({
  selector: '[scrollEnter]'
})
export class ScrollEnterDirective {
  constructor(private _elementRef: ElementRef, renderer: Renderer) {
    renderer.invokeElementMethod(_elementRef.nativeElement, 'scrollIntoView', [false]);
  }
}
