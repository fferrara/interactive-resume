import { Component, OnInit, trigger, state, style, transition, animate } from '@angular/core';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css'],
  animations: [
    trigger('visibilityChanged', [
      state('visible' , style({ visibility: 'visible', opacity: 1 })),
      state('hidden', style({ visibility: 'hidden', opacity: 0 })),
      transition('hidden => visible', animate('.8s'))
])
]
})
export class StoryComponent implements OnInit {
  private pasta = 'hidden';
  private year2006 = 'hidden';
  private year2008 = 'hidden';
  private exchange = 'hidden';
  private college = 'hidden';
  private roadTrip = 'hidden';
  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.pasta = 'visible';
    }, 1000);
    setTimeout(() => {
      this.year2006 = 'visible';
    }, 1500);
    setTimeout(() => {
      this.year2008 = 'visible';
    }, 2000);
    setTimeout(() => {
      this.college = 'visible';
    }, 3000);
    setTimeout(() => {
      this.exchange = 'visible';
    }, 4000);
    setTimeout(() => {
      this.roadTrip = 'visible';
    }, 4500);
  }



}
