import { Injectable } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeEnglish from '@angular/common/locales/en';
import localeMexico from '@angular/common/locales/es-MX';

@Injectable({ providedIn: 'root' })
export class LocaleService {

  private _locale: string;

  constructor() {
    this._locale = 'es-MX';
    this.registerCulture(this._locale);
  }

  set locale(value: string) {
    this._locale = value;
  }
  get locale(): string {
    return this._locale || 'en';
  }

  get currencyCode(): string {
    if(this._locale == 'en') {
      return 'USD';
    }
    else {
      return 'MXN';
    }
  }


  registerCulture(culture: string) {
    if (!culture) {
      return;
    }
    this.locale = culture;

    switch (culture) {
      case 'en': {
        registerLocaleData(localeEnglish);
        break;
      }
      case 'es-MX': {
        registerLocaleData(localeMexico);
        break;
      }
    }
  }


}