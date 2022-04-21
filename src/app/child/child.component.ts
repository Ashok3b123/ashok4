import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
      @Output() b:EventEmitter<any>=new EventEmitter();
      num=0
      submit()
      {
        this.b.emit(this.num)
      }

  constructor() { }

  ngOnInit(): void {
  }

}

