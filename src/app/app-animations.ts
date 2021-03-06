import { animate, animation, stagger, style } from '@angular/animations';

export const fadeIn = animation([
  style({ opacity: 0, transform: 'translateX(100px)' }),
  stagger('30ms', [
    animate('500ms cubic-bezier(0.35, 0, 0.25, 1)',
      style({ opacity: 1, transform: 'none' }))
  ])
]);
