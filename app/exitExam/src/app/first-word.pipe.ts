import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstLetter'
})
export class FirstLetterPipe implements PipeTransform {

  transform(value: string): string {
    if (!value) { return ''; }
    return value.split('')[0];
  }


}
