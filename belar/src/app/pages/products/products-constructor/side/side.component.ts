import { Component, Input } from '@angular/core';
import { ConstructItem, Sleeve } from 'src/app/dao/interfaces/interfaces';

@Component({
  selector: 'app-side',
  templateUrl: './side.component.html',
  styleUrl: './side.component.sass'
})
export class SideComponent {
  public constructItem?: ConstructItem | undefined

  @Input('constructItem') public set setProducts(constructItem: ConstructItem | undefined) {
    setTimeout(() => {
      this.constructItem = constructItem
      console.log(this.constructItem);
    }, 200);
  }
}
