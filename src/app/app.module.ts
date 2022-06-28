import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { LocaleService } from './core/locale.service';
import { NgIdleKeepaliveModule } from '@ng-idle/keepalive';
import { HttpClientModule } from '@angular/common/http';
import { ErrorPageComponent } from './error-page/error-page.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ErrorPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,    
    BrowserAnimationsModule,
    HttpClientModule,
    NgIdleKeepaliveModule.forRoot(),
  ],
  providers: [
    {
      provide: DEFAULT_CURRENCY_CODE,
      deps: [LocaleService],
      useFactory: (localeService: LocaleService) => localeService.currencyCode
    },
    {
      provide: LOCALE_ID,
      deps: [LocaleService],
      useFactory: (localeService: LocaleService) => localeService.locale
    }],

  bootstrap: [AppComponent]
})
export class AppModule { }


