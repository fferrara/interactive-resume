import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[scrollEnter]'
})
export class ScrollEnterDirective {

  private _baseOffset = 0;
  private _side:string = 'left';
  private _hidden:boolean = true;

  @Input()
  set baseOffset(baseOffset: number){
    this._baseOffset = baseOffset;
  }
  @Input()
  set side(side: string){
    this._side = side;
  }

  constructor(private _elementRef: ElementRef) {

    this._elementRef.nativeElement.classList.add('hidden');
  }

  @HostListener('window:scroll', ['$event'])
  doSomething(event) {
    if (!this._hidden) return;

    let threshold = this._baseOffset + this._elementRef.nativeElement.offsetTop;
    let offset = event.view.pageYOffset;

    if (offset > 0.85*threshold){
      this._hidden = false;
      this._elementRef.nativeElement.classList.remove('hidden');
      this._elementRef.nativeElement.classList.add('animated');
      this._elementRef.nativeElement.classList.add('fadeIn' + ScrollEnterDirective.capitalize(this._side));
    }
  }

  private static capitalize(_string: string) {
    return _string.charAt(0).toUpperCase() + _string.slice(1);
  }
}
