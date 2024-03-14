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
  public sideElement!: { el: Item, side: string }
  constructor(
    private serv: ConstructorService
  ) { }

  ngAfterViewInit(): void {

  }

  ngOnInit(): void {
    this.serv.getAll().subscribe(data => {
      this.construct = data
      console.log(this.construct);
    })
  }

  setSideElement(el: Item, side: string) {
    this.sideElement = { side, el }
  }
}
