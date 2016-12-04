import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'f-circle',
  template: `
    <div class="circle" [ngClass]="position"></div>
  `,
  styles: [
    `.circle { width: 40%; height: 0; padding-bottom: 40%; position: absolute;border-radius: 50%;background: rgba(0, 255, 0, 0.3); }
      .left { top: 10%; left: 20%; }
      .right { right: 20%; top: 10%;}
      .bottom { top: 30%; left: 30%}
    `
  ]
})
export class Circle implements OnInit {
  ngOnInit(): void {
  }

  @Input()
  position;

  constructor() {
  }

}
