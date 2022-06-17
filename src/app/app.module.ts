import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideStorage, getStorage } from '@angular/fire/storage';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LocaleService } from './core/locale.service';
import { CoreModule } from './core/core.module';
import { WidgetModule } from './widget/widget.module';
import { NgIdleKeepaliveModule } from '@ng-idle/keepalive';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
    BrowserAnimationsModule,
    CoreModule,
    WidgetModule,
    HttpClientModule,
    NgIdleKeepaliveModule.forRoot()
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


