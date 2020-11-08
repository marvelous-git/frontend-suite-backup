import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { NbMediaBreakpointsService, NbMenuService, NbSidebarService, NbThemeService } from '@nebular/theme';

import { LayoutService } from '../../utils';
import { map, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import {
  LAYOUT_CONFIGURATION_TOKEN,
  LayoutConfiguration
} from '../../tokens';

@Component({
  selector: 'frontend-suite-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit, OnDestroy {

  private destroy$: Subject<void> = new Subject<void>();
  userPictureOnly: boolean = this.configuration.nebular.userPictureOnly;
  user = {
    firstName: "Marvelous",
    lastName: "Mashamba",
    picture: undefined,
  };
  isClosed = true;

  userMenu = this.configuration.nebular.userMenus;

  constructor( @Inject(LAYOUT_CONFIGURATION_TOKEN)
              public configuration: LayoutConfiguration,
              private sidebarService: NbSidebarService,
              private menuService: NbMenuService,
              private themeService: NbThemeService,
              private layoutService: LayoutService,
              private breakpointService: NbMediaBreakpointsService) {
  }

  ngOnInit() {

    const { xl } = this.breakpointService.getBreakpointsMap();
    this.themeService.onMediaQueryChange()
      .pipe(
        map(([, currentBreakpoint]) => currentBreakpoint.width < xl),
        takeUntil(this.destroy$),
      )
      .subscribe((isLessThanXl: boolean) => {
        this.userPictureOnly = isLessThanXl;
        this.isClosed = !isLessThanXl;
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }


  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');
    this.layoutService.changeLayoutSize();
    this.isClosed =!this.isClosed

    return false;
  }

  navigateHome() {
    this.menuService.navigateHome();
    return false;
  }
}
