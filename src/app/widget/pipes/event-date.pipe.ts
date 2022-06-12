import { Pipe, PipeTransform, Inject, LOCALE_ID, } from '@angular/core';

@Pipe({
  name: 'eventDate'
})
export class EventDatePipe implements PipeTransform {

  constructor(
    @Inject(LOCALE_ID) public locale: string
  ) { }

  transform(value: Date): string {
    return value?.toLocaleDateString(this.locale, {
      weekday: 'long', year: 'numeric', month:
        'long', day: 'numeric'
    });
  }

}
