import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { NbMediaBreakpointsService, NbMenuService, NbSidebarService, NbThemeService } from '@nebular/theme';

import { LayoutService } from '../../utils';
import { filter, map, takeUntil } from 'rxjs/operators';
import { Subject, Observable } from 'rxjs';
import {
  LAYOUT_CONFIGURATION_TOKEN,
  LayoutConfiguration
} from '../../tokens';
import { IAuthFacade } from "@frontend-suite/shared/util-auth";
import { Router } from '@angular/router';


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
          //    private userService: IAuthFacade,
              private layoutService: LayoutService,
              private breakpointService: NbMediaBreakpointsService,
              router: Router
              ) {

    menuService
    .onItemClick()
    .pipe(
      filter(({ tag }) => tag === 'user-context-menu'),
      map(({ item: { title } }) => title.toLowerCase())
    )
    .subscribe(title => {
      switch (title) {
        case 'profile':
          router.navigate(['/pages']);
          break;
        case 'log out':
          router.navigate(['/pages/dashboard']);
          break;
        case 'logout':
  //        this.userService.logout();
          break;
      }
    });


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
