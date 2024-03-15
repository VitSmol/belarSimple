import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Construct, Item } from 'src/app/dao/interfaces/interfaces';
import { ConstructorService } from 'src/app/services/constructor.service';

@Component({
  selector: 'app-products-constructor',
  templateUrl: './products-constructor.component.html',
  styleUrls: ['./products-constructor.component.sass']
})
export class ProductsConstructorComponent implements OnInit, AfterViewInit {

  public construct?: Construct
  public leftSideElement!: { el: Item, side: string }
  public rightSideElement!: { el: Item, side: string }
  public topRightElement!: { el: Item, side: string }
  public topLeftElement!: { el: Item, side: string }
  constructor(
    private serv: ConstructorService
  ) { }

  ngAfterViewInit(): void {

  }

  ngOnInit(): void {
    this.serv.getAll().subscribe(data => {
      this.construct = data
    })
  }

  setSideElement(el: Item, side: string) {
    if (side === 'left') {
      this.leftSideElement = { side, el }
    } else if (side === 'right') {
      this.rightSideElement = { side, el }
    } else if (side === 'topleft') {
      this.topLeftElement = {side, el}
    } else if (side === 'topright') {
      this.topRightElement = {side, el}
    }
  }
}
