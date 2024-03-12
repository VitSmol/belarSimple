import { Component, Input } from '@angular/core';
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
      console.log(constructItem);
    }, 200);
  }

  clear(name: string) {
    document.querySelectorAll(`input[name=${name}]`).forEach(item => {
      console.dir(item);
      (item as HTMLInputElement).checked = false

    })
  }
}
