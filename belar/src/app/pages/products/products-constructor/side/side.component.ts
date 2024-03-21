import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { ConstructItem, Item, Sleeve } from 'src/app/dao/interfaces/interfaces';

@Component({
  selector: 'app-side',
  templateUrl: './side.component.html',
  styleUrl: './side.component.sass'
})
export class SideComponent {
  public constructItem?: ConstructItem | undefined
  public width: number = 0

  @HostListener('window:resize', ['$event'])
  onResize(event:any) {
    this.width = event.target.innerWidth
  }
  @Output() sideElement = new EventEmitter<Item | null>()

  @Input('constructItem') public set setProducts(constructItem: ConstructItem | undefined) {
    setTimeout(() => {
      this.constructItem = constructItem
    }, 200);
  }

  setElement(el: Item | null) {
    this.sideElement.emit(el)
  }

}
