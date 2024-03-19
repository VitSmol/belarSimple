import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appScale]',
  standalone: true
})
export class ScaleDirective {
  private initialScale = 1
  private initialDistance = 0

  constructor(private elementRef: ElementRef) {
  }

  @HostListener('touchstart', ['$event'])
    onTouchStart(event: TouchEvent) {
      if (event.touches.length === 2) {
        const touch1 = event.touches[0];
        const touch2 = event.touches[1];
        this.initialDistance = Math.hypot(touch1.clientX - touch2.clientX, touch1.clientY - touch2.clientY);
      }
    }

  @HostListener('touchmove', ['$event'])
    onTouchMove(event: TouchEvent) {
      event.preventDefault();
      if (event.touches.length === 2) {
        const touch1 = event.touches[0];
        const touch2 = event.touches[1];
        const currentDistance = Math.hypot(touch1.clientX - touch2.clientX, touch1.clientY - touch2.clientY);
        const scaleDiff = currentDistance / this.initialDistance
        const newScale = this.initialScale * scaleDiff;
        this.elementRef.nativeElement.style.scale = `${newScale}`
      }
    }

    @HostListener('touchend', ['event'])
      onTouchEnd(event: TouchEvent) {
        this.initialScale = parseFloat(this.elementRef.nativeElement.style.scale.replace('(', "").replace(')', ''));
      }
}
