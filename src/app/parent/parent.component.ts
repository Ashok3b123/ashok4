import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
      b=0;
      catch(value:any)
      {
        this.b=value;
      }
  constructor() { }

  ngOnInit(): void {
  }

}
