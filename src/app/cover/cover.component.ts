import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";

@Component({
  selector: 'app-cover',
  templateUrl: './cover.component.html',
  styleUrls: ['./cover.component.css']
})
export class CoverComponent implements OnInit {

  _jobs: Array<string> = ["computer scientist.", "developer.", 'researcher.', 'traveler.', 'nice guy.'];
  index: number = 0;
  job: string = '';

  constructor() {
  }

  ngOnInit() {
    this._print();
  }

  private _print() {
    this.index = this.index < this._jobs.length && this.index || 0;
    let current = this._jobs[this.index];
    Observable
      .from(current.split(""))
      .scan((acc, curr) => acc + curr)
      .zip(Observable.interval(50), (x) => x)
      .subscribe(
        (char) => {
          this.job = char
        },
        (error) => {
          console.log(error)
        },
        () => {
          this.index++;
          this._erase();
        }
      )
  }

  private _erase (){
    Observable
      .from(this.job.split(""))
      .scan((acc, curr, index) => {return this.job.slice(0, -(index + 1))}, this.job)
      .zip(Observable.interval(50), (x) => x)
      .delay(1000)
      .subscribe(
        (char) => {
          this.job = char;
        },
        (error) => {
          console.log(error)
        },
        () => {
          this._print()
        }
      )
  }

}
