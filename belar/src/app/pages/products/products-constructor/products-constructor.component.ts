import { AfterViewInit, Component, HostListener, OnInit } from '@angular/core';
import { Construct, Item } from 'src/app/dao/interfaces/interfaces';
import { ConstructorService } from 'src/app/services/constructor.service';

@Component({
  selector: 'app-products-constructor',
  templateUrl: './products-constructor.component.html',
  styleUrls: ['./products-constructor.component.sass']
})
export class ProductsConstructorComponent implements OnInit, AfterViewInit {

  public construct?: Construct
  public leftSideElement!: { el: Item | null, side: string }
  public rightSideElement!: { el: Item | null, side: string }
  public topRightElement!: { el: Item | null, side: string }
  public topLeftElement!: { el: Item | null, side: string }
  public width: number = window.innerWidth
  public leftShow: boolean = false
  public rightShow: boolean = false
  public topShow: boolean = false

  @HostListener('window:resize', ['$event'])
  onResize(event:any) {
    this.width = event.target.innerWidth
  }
  @HostListener('window:load', ['$event'])
  onLoad(event:any) {
    this.width = window.innerWidth
    console.log(this.width);
  }

  constructor(
    private serv: ConstructorService
  ) { }

  ngAfterViewInit(): void {

  }

  ngOnInit(): void {
    this.serv.getAll().subscribe(data => {
      this.construct = data
    })
    console.log(this.width);

  }

  setSideElement(el: Item | null, side: string) {
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
  showHide(ev: any, side: string) {

  }
}
