import { Component, Input } from '@angular/core';

@Component({
  selector: '[appCircle]',
  template: `
    <svg:circle [attr.r]="radius" [attr.cx]="cx" [attr.cy]="cy"></svg:circle>
  `
})
export class Circle {
  @Input()
  radius = 70;
  @Input()
  cx = 140;
  @Input()
  cy = 70;
  constructor() { }

}
