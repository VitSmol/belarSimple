import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Construct, ConstructItem, Item } from 'src/app/dao/interfaces/interfaces';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrl: './top.component.sass'
})
export class TopComponent {
  public constructItem?: Construct | undefined
  public bonksArray?: Item[] = [];
  public shtucArray?: Item[] = [];
  public items!: Item[];

  @Input('constructItem') public set setProducts(constructItem: Construct | undefined) {
    setTimeout(() => {
      this.constructItem = constructItem
    }, 200);
  }
  @Output() topLeftElement = new EventEmitter<Item>();
  @Output() topRightElement = new EventEmitter<Item>();

  clear(name: string) {
    document.querySelectorAll(`input[name=${name}]`).forEach(item => {
      (item as HTMLInputElement).checked = false
    })
  }

  setElement(el: Item, side: string) {
    if (side === 'topleft') {
      this.topLeftElement.emit(el);
    }
    if (side === 'topright') {
      this.topRightElement.emit(el)
    }
  }
}
