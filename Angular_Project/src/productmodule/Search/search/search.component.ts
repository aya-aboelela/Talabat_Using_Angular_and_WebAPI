import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
entersearchvalue:string="";
  constructor() { }

  ngOnInit(): void {
  }
  @Output()
  searchchangedvalue:EventEmitter<string>=new EventEmitter<string>();
  onsearchangedvalue()
  {
    this.searchchangedvalue.emit(this.entersearchvalue);
  }

}
