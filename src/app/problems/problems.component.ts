import {Component, OnInit, ElementRef, trigger} from "@angular/core";

@Component({
  selector: 'app-problems',
  templateUrl: './problems.component.html',
  styleUrls: ['./problems.component.css']
})
export class ProblemsComponent implements OnInit {
  public list:[any];
  public baseOffset;

  constructor(private _elementRef: ElementRef) {

    this.list = [{
      title: 'Exploration',
      text: 'Learn about different fields to identify hard and <b>meaningful</b> problems'
    }, {
      title: 'Analysis',
      text: '<b>Systematically</b>, scientifically and driven by <b>data</b>'
    }, {
      title: 'Creativity',
      text: 'Think <b>differently</b> and come up with innovative solutions'
    }, {
      title: 'Quality',
      text: 'Do you prefer a solution or a <b>good</b> solution?'
    }, {
      title: 'Team',
      text: 'Working is better with other skilled professionals!'
    }];
  }

  ngOnInit() {
    this.baseOffset = this._elementRef.nativeElement.offsetTop;
  }



}
