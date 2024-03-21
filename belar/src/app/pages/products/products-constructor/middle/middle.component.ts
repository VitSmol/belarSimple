import { WrappedNodeExpr } from '@angular/compiler';
import { AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Item } from 'src/app/dao/interfaces/interfaces';
import { ScaleDirective } from 'src/app/directives/scale.directive';
import { ConstructorService } from 'src/app/services/constructor.service';


@Component({
  selector: 'app-middle',
  templateUrl: './middle.component.html',
  styleUrl: './middle.component.sass',
})
export class MiddleComponent implements OnChanges, OnInit, AfterViewInit {

  public sizeSelectArray1: number[] = [25, 32, 35, 40, 50, 60, 63, 70, 75, 80, 90, 100, 110, 125, 140 ];
  public sizeSelectArray2: number[] = [20, 22, 25, 28, 30, 32, 35, 40, 45, 50, 56, 60, 63, 70, 80 ];


  constructor(
    private serv: ConstructorService
  ) {

  }

  public leftImgContainer!: HTMLDivElement
  public rightImgContainer!: HTMLDivElement
  public topRightImgContainer!: HTMLDivElement
  public topLeftImgContainer!: HTMLDivElement
  public mainImg!: HTMLImageElement

  public scale = 1.3;
  public wrapper!: HTMLElement


  @Input() leftSideElement!: { el: Item | null, side: string }
  @Input() rightSideElement!: { el: Item | null, side: string }
  @Input() topRightElement!: { el: Item | null, side: string }
  @Input() topLeftElement!: { el: Item | null, side: string }

  ngOnInit(): void {
    this.mainImg = document.getElementById('main') as HTMLImageElement
  }

  ngAfterViewInit(): void {
    this.leftImgContainer = document.getElementById('left-side') as HTMLDivElement
    this.rightImgContainer = document.getElementById('right-side') as HTMLDivElement
    this.topLeftImgContainer = document.getElementById('top-left') as HTMLDivElement
    this.topRightImgContainer = document.getElementById('top-right') as HTMLDivElement
    this.wrapper = document.getElementById('img-wrapper') as HTMLDivElement
    this.wrapper!.scrollLeft = window.innerWidth / 8
    this.wrapper!.scrollTop = 100
  }

  onwheel(event: Event) {
    event.preventDefault();
    let count = (event as WheelEvent).deltaY / 5000
    this.scale -= count
  }

  ngOnChanges(changes: SimpleChanges): void {
    // this.wrapper.classList.add('dragscroll')
    if (changes) {
      if (changes[`leftSideElement`]) {
        this.serv.createImg(this.leftImgContainer, this.leftSideElement)
      }
      if (changes[`rightSideElement`]) {
        this.serv.createImg(this.rightImgContainer, this.rightSideElement)
      }
      if (changes[`topRightElement`]) {
        this.serv.createVerticalImg(this.topRightImgContainer, this.topRightElement)
      }
      if (changes[`topLeftElement`]) {
        this.serv.createVerticalImg(this.topLeftImgContainer, this.topLeftElement)
      }
    }
  }

  checkNums(ev: KeyboardEvent): void {
    (ev.target as HTMLInputElement).value = (ev.target as HTMLInputElement).value.replace(/[^0-9]/g,'')
  }



}

