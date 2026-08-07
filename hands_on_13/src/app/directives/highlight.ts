import {
  Directive,
  HostBinding,
  HostListener
} from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {

  @HostBinding('style.backgroundColor')
  background = 'white';

  @HostBinding('style.transition')
  transition = '0.3s';

  @HostBinding('style.cursor')
  cursor = 'pointer';

  @HostListener('mouseenter')
  onMouseEnter() {

    this.background = '#fff59d';

  }

  @HostListener('mouseleave')
  onMouseLeave() {

    this.background = 'white';

  }

}