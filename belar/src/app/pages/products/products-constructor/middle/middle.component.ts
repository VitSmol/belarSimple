import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Item } from 'src/app/dao/interfaces/interfaces';

@Component({
  selector: 'app-middle',
  templateUrl: './middle.component.html',
  styleUrl: './middle.component.sass'
})
export class MiddleComponent implements OnChanges, OnInit{


scale = 1;
public leftImg!: HTMLImageElement
public rightImg!: HTMLImageElement
public mainImg!: HTMLImageElement

@Input() sideElement!: {el: Item, side: string}

  onwheel(event: Event) {
    event.preventDefault();
    // let element = event.currentTarget as HTMLDivElement
    let count = (event as WheelEvent).deltaY / 10000
    this.scale -= count
  }

  ngOnInit(): void {
    this.mainImg = document.getElementById('main') as HTMLImageElement
    console.log(this.mainImg);

  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes) {


    if (changes['sideElement']) {
      if (changes['sideElement']?.currentValue?.side === 'left') {
        // console.log(changes['sideElement'].currentValue);
        console.log(`left`);

      } else if (changes['sideElement']?.currentValue?.side === 'right') {
        console.log(`right`);

      }

    }
  }
  }
}
