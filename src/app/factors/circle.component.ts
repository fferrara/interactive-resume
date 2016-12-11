import {
  Component, Input, OnInit, HostListener, ElementRef, trigger, state, style, transition,
  animate
} from '@angular/core';

@Component({
  selector: 'f-circle',
  template: `
    <div  [ngClass]="position">
    <span class="label">{{label}}</span>
    <div class="circle">
    </div>
    </div>
  `,
  styleUrls: ['./circle.component.css'],
})
export class Circle implements OnInit {
  ngOnInit(): void {
  }

  @Input()
  position:string;
  @Input()
  label:string;

  constructor(private el: ElementRef) {
  }

}
