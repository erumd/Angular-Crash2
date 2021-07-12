import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  brews: Object

  constructor(private _http: HttpService) { 
    this.brews = []; // had to add in this to get rid of error: "Property '…' has no initializer and is not definitely assigned in the constructor"
  }

  ngOnInit() {
    this._http.getBeer().subscribe(data => { //returns observable and subscribe
      this.brews = data
      console.log(this.brews);
    }
  );
  }
}
