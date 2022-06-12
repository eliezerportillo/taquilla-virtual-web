import { Inject, LOCALE_ID, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'eventTime'
})
export class EventTimePipe implements PipeTransform {

  constructor(
    @Inject(LOCALE_ID) public locale: string
  ) { }

  transform(value: Date): string {
    return value?.toLocaleTimeString(this.locale, { timeStyle: 'short' })
  }
}
