import { Component } from '@angular/core';

@Component({
  selector: 'app-middle',
  templateUrl: './middle.component.html',
  styleUrl: './middle.component.sass'
})
export class MiddleComponent {
scale = 1;

  onwheel(event: Event) {
    event.preventDefault();
    // let element = event.currentTarget as HTMLDivElement
    let count = (event as WheelEvent).deltaY / 10000
    this.scale -= count
  }
}
