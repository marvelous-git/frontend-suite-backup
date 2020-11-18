import { Component, OnInit } from '@angular/core';
import {SelectItem} from 'primeng/api';

@Component({
  selector: 'frontend-suite-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  groups: Group[];
  selectedGroups: Group[];

  classification: string;

  ngOnInit(): void {
    this.groups = [
      {name: 'GENERAL_STANDARD_USER', code: 'NY'},
      {name: 'LINE_MANAGER', code: 'RM'},
      {name: 'SENIOR_MANAGER', code: 'LDN'},
      {name: 'EXECUTIVE_MANAGER', code: 'IST'},
      {name: 'TECHNOLOGY_SERVICES', code: 'PRS'}
  ];
  }

}
interface Group {
  name: string,
  code: string
}
