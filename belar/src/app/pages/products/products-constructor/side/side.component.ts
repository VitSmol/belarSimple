import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ConstructItem, Item, Sleeve } from 'src/app/dao/interfaces/interfaces';

@Component({
  selector: 'app-side',
  templateUrl: './side.component.html',
  styleUrl: './side.component.sass'
})
export class SideComponent {
  public constructItem?: ConstructItem | undefined

  @Output() sideElement = new EventEmitter<Item>()

  @Input('constructItem') public set setProducts(constructItem: ConstructItem | undefined) {
    setTimeout(() => {
      this.constructItem = constructItem
      console.log(this.constructItem);
    }, 200);
  }

  log(el: Item) {
    this.sideElement.emit(el)
  }
}
