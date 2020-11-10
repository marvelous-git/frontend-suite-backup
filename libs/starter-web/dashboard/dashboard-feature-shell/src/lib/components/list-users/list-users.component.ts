import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'frontend-suite-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {

  constructor() { }

  dtOptions: DataTables.Settings = {};

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      lengthMenu: [5, 10, 25, 50, 100, 500]
    };
  }

}
