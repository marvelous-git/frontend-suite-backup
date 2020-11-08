import { Component} from '@angular/core';

import { MENU_ITEMS } from './pages-menu';

@Component({
  selector: 'frontend-suite-pages',
  styleUrls: ['pages.component.scss'],
  template: `
    <frontend-suite-one-column-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </frontend-suite-one-column-layout>
  `,
})
export class PagesComponent{

  constructor() { }

  menu = MENU_ITEMS;

}
