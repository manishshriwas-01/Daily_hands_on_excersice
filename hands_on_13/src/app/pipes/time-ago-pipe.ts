import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeAgo',
  standalone: true
})
export class TimeAgoPipe implements PipeTransform {

  transform(value: Date): string {

    const now = new Date();

    const diff = now.getTime() - value.getTime();

    const minutes = Math.floor(diff / (1000 * 60));

    if (minutes < 1) {
      return 'Just now';
    }

    if (minutes < 60) {
      return `${minutes} minute(s) ago`;
    }

    const hours = Math.floor(minutes / 60);

    if (hours < 24) {
      return `${hours} hour(s) ago`;
    }

    const days = Math.floor(hours / 24);

    return `${days} day(s) ago`;

  }

}