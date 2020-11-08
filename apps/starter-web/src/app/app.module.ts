import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { UiLayoutsModule } from '@frontend-suite/shared/ui-layouts';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { PagesModule } from './pages/pages.module';
import { environment } from '../environments/environment';

import {
  NbChatModule,
  NbDatepickerModule,
  NbDialogModule,
  NbMenuModule,
  NbSidebarModule,
  NbToastrModule,
  NbWindowModule,
} from '@nebular/theme';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      [
        {
          path: 'pages',
          loadChildren: () =>
            import('./pages/pages.module').then((module) => module.PagesModule),
        },
        { path: '**', redirectTo: 'pages' },
      ],
      { initialNavigation: 'enabled' }
    ),
    PagesModule,
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbDatepickerModule.forRoot(),
    NbDialogModule.forRoot(),
    NbWindowModule.forRoot(),
    NbToastrModule.forRoot(),
    NbChatModule.forRoot({
      messageGoogleMapKey: 'AIzaSyA_wNuCzia92MAmdLRzmqitRGvCF7wCZPY',
    }),
    UiLayoutsModule.forRoot({
      applicationName: environment.application.name,
      nebular: environment.nebular,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
