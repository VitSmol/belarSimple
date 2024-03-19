import { WrappedNodeExpr } from '@angular/compiler';
import { AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Item } from 'src/app/dao/interfaces/interfaces';

@Component({
  selector: 'app-middle',
  templateUrl: './middle.component.html',
  styleUrl: './middle.component.sass'
})
export class MiddleComponent implements OnChanges, OnInit, AfterViewInit {

  constructor() {

  }

  public leftImgContainer!: HTMLDivElement
  public rightImgContainer!: HTMLDivElement
  public topRightImgContainer!: HTMLDivElement
  public topLeftImgContainer!: HTMLDivElement
  public mainImg!: HTMLImageElement

  public scale = 1.3;
  public wrapper!: HTMLElement
  public startDistance: number = 0


  @Input() leftSideElement!: { el: Item, side: string }
  @Input() rightSideElement!: { el: Item, side: string }
  @Input() topRightElement!: { el: Item, side: string }
  @Input() topLeftElement!: { el: Item, side: string }

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

    // const wrapper = document.querySelectorAll('.img-wrapper')
  }

  onwheel(event: Event) {
    event.preventDefault();
    let count = (event as WheelEvent).deltaY / 5000
    this.scale -= count
  }

  createImg(parentNode: HTMLDivElement, child: any) {
    // TODO РАБОТАЕТ
    if (!child) {
      // parentNode.innerHTML = ''
      return
    }
    parentNode.innerHTML = '' //очищаем родительский контейнер
    parentNode.classList.remove('slide')
    parentNode.style.height = "82%" //устанавливаем ему высоту 82%
    const img = document.createElement('img') as HTMLImageElement //создаем изображение
    img.src = child.el.mainImg // устанавливаем картинку
    img.style.height = `100%` // задаем высоту изображения равную высоте родительского контейнера
    parentNode.style.bottom = child.el.bottom
    parentNode.style.height = child.el.height
    setTimeout(() => {
      parentNode.style.transform = `translate(${child.side === 'left' ? -img.clientWidth * 50 : img.clientWidth * 100}px)`
      parentNode.style[child.side] = -img.clientWidth - 1 + 'px';
      parentNode.style.width = img.clientWidth + 'px';
      parentNode.classList.add('slide')
    }, 500);
    parentNode.append(img)
  }

  createVerticalImg(parentNode: HTMLDivElement, child: any) {
    if (!child) return
    parentNode.innerHTML = ''
    parentNode.classList.remove('topSlide')
    const img = document.createElement('img') as HTMLImageElement
    img.src = child.el.mainImgSrc
    img.style.width = `100%`
    setTimeout(() => {
      parentNode.style.transform = `translateY(${-img.clientHeight * 100}px)`
      parentNode.style.top = -img.clientHeight + 'px';
      parentNode.style.height = img.clientHeight + 'px'
      parentNode.classList.add('topSlide')
    }, 500);
    parentNode.append(img)
  }

  ngOnChanges(changes: SimpleChanges): void {
    // this.wrapper.classList.add('dragscroll')
    if (changes) {
      if (changes[`leftSideElement`]) {
        this.createImg(this.leftImgContainer, this.leftSideElement)
      }
      if (changes[`rightSideElement`]) {
        this.createImg(this.rightImgContainer, this.rightSideElement)
      }
      if (changes[`topRightElement`]) {
        this.createVerticalImg(this.topRightImgContainer ,this.topRightElement)
      }
      if (changes[`topLeftElement`]) {
        this.createVerticalImg(this.topLeftImgContainer ,this.topLeftElement)
      }
    }
  }


  onTouchStart(e: TouchEvent) {
    // if (e.touches.length > 1) {
    //   e.preventDefault()
    //   const t1 = e.touches[0];
    //   const t2 = e.touches[1];
    //   const distance = Math.hypot(t1.clientX - t2.clientX, t1.clientY - t2.clientY)
    //   this.startDistance = distance
    // }

  }
  onTouchMove(e: TouchEvent) {
    // if (e.touches.length > 1) {
    //   e.preventDefault()
    //   const t1 = e.touches[0];
    //   const t2 = e.touches[1];
    //   const distance = Math.hypot(t1.clientX - t2.clientX, t1.clientY - t2.clientY)

    //   if (distance < this.startDistance) {
    //     this.scale -= distance / 13000
    //   } else {
    //     this.scale += distance / 13000
    //   }
    // }

  }



}

