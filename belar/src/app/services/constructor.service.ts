import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConstructDAOArray } from '../dao/implements/ConstructDAOArray';
import { Observable } from 'rxjs';
import { Construct, Item } from '../dao/interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ConstructorService {

  constructor(
    private http: HttpClient
  ) { }

  private ConstructorDAO = new ConstructDAOArray(this.http)

  getAll(): Observable<Construct> {
    return this.ConstructorDAO.getAll();
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

  createImg(parentNode: HTMLDivElement, child: any) {
    // TODO РАБОТАЕТ
    if (!child) {
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

    this.createInputs(parentNode, child)
    parentNode.append(img)
  }


  createInputs(parentNode: HTMLDivElement, child: { el: Item, side: string }) {
    if (child.side === 'left' || child.side === 'right') {
      const side = child.side
      if (child.el.subgroup === '1.1') {
        const inp1 = document.createElement('input') as HTMLInputElement
        const inp2 = document.createElement('input') as HTMLInputElement
        const inp3 = document.createElement('input') as HTMLInputElement
        [inp1, inp2, inp3].forEach((item, ind, arr) => {
          item.classList.add('simple-input')
          item.type = 'text'
          arr[0].style.top = `-10%`;
          arr[0].style[side] = `55%`

          arr[1].style.top = `24%`;
          arr[1].style[side] = `54%`

          arr[2].style.bottom = `20%`;
          arr[2].style[side] = `-15%`

          parentNode.append(item)
        })
      }
      if (child.el.subgroup === '1.2') {
        const inp1 = document.createElement('input') as HTMLInputElement
        const inp2 = document.createElement('input') as HTMLInputElement
        const inp3 = document.createElement('input') as HTMLInputElement
        [inp1, inp2, inp3].forEach((item, ind, arr) => {
          item.classList.add('simple-input')
          item.type = 'text'
          arr[0].style.top = `15%`;
          arr[0].style[side] = `-23%`
          arr[1].style.bottom = `10%`;
          arr[1].style[side] = `-23%`
          arr[2].style.top = `38%`;
          arr[2].style[side] = `-23%`
          parentNode.append(item)
        })
      }
      if (child.el.subgroup === '2.1') {
        const inp1 = document.createElement('input') as HTMLInputElement
        const inp2 = document.createElement('input') as HTMLInputElement
        const inp3 = document.createElement('input') as HTMLInputElement
        const inp4 = document.createElement('input') as HTMLInputElement
        [inp1, inp2, inp3, inp4].forEach((item, ind, arr) => {
          item.classList.add('simple-input')
          item.type = 'text'
          arr[0].style.top = `-12%`;
          arr[0].style[side] = `-15%`

          arr[2].style.top = `7%`;
          arr[2].style[side] = `-23%`

          arr[1].style.bottom = `26%`;
          arr[1].style[side] = `-25%`

          arr[3].style.bottom = `-12%`;
          arr[3].style[side] = `61%`
          parentNode.append(item)
        })
      }
      if (child.el.subgroup === '2.2') {
        const inp1 = document.createElement('input') as HTMLInputElement
        const inp2 = document.createElement('input') as HTMLInputElement
        const inp3 = document.createElement('input') as HTMLInputElement
        const inp4 = document.createElement('input') as HTMLInputElement
        [inp1, inp2, inp3, inp4].forEach((item, ind, arr) => {
          item.classList.add('simple-input')
          item.type = 'text'
          arr[0].style.top = `-11%`;
          arr[0].style[side] = `52%`
          arr[2].style.top = `15%`;
          arr[2].style[side] = `42%`
          arr[1].style.bottom = `36%`;
          arr[1].style[side] = `-18%`
          arr[3].style.bottom = `6%`;
          arr[3].style[side] = `67%`
          parentNode.append(item)
        })
      }
      if (child.el.subgroup === '3.1') {
        const inp1 = document.createElement('input') as HTMLInputElement
        const inp2 = document.createElement('input') as HTMLInputElement
        const inp3 = document.createElement('input') as HTMLInputElement
        [inp1, inp2, inp3].forEach((item, ind, arr) => {
          item.classList.add('simple-input')
          item.type = 'text'
          arr[0].style.top = `-8%`;
          arr[0].style[side] = `54%`
          arr[2].style.top = `15%`;
          arr[2].style[side] = `52%`
          arr[1].style.bottom = `22%`;
          arr[1].style[side] = `-13%`
          parentNode.append(item)
        })
      }
      if (child.el.subgroup === '3.2') {
        const inp1 = document.createElement('input') as HTMLInputElement
        const inp2 = document.createElement('input') as HTMLInputElement
        const inp3 = document.createElement('input') as HTMLInputElement
        [inp1, inp2, inp3].forEach((item, ind, arr) => {
          item.classList.add('simple-input')
          item.type = 'text'
          arr[0].style.top = `-15%`;
          arr[0].style[side] = `-20%`
          arr[1].style.top = `30%`;
          arr[1].style[side] = `-20%`
          arr[2].style.bottom = `0%`;
          arr[2].style[side] = `-20%`
          parentNode.append(item)
        })
      }
      if (child.el.subgroup === '4.1') {
        const inp1 = document.createElement('input') as HTMLInputElement
        const inp2 = document.createElement('input') as HTMLInputElement
        const inp3 = document.createElement('input') as HTMLInputElement
        const inp4 = document.createElement('input') as HTMLInputElement
        const inp5 = document.createElement('input') as HTMLInputElement
        const inp6 = document.createElement('input') as HTMLInputElement
        [inp1, inp2, inp3, inp4, inp5, inp6].forEach((item, ind, arr) => {
          item.classList.add('simple-input')
          item.type = 'text'
          arr[0].style.top = `-6%`;
          arr[0].style[side] = `66%`

          arr[1].style.top = `9%`;
          arr[1].style[side] = `60%`

          arr[2].style.top = `23%`;
          arr[2].style[side] = `37%`

          arr[3].style.bottom = `35%`;
          arr[3].style[side] = `-16%`

          arr[4].style.bottom = `34%`;
          arr[4].style[side] = `13%`

          arr[5].style.bottom = `0%`;
          arr[5].style[side] = `34%`
          parentNode.append(item)
        })
      }
      if (child.el.subgroup === '4.2') {
        const inp1 = document.createElement('input') as HTMLInputElement
        const inp2 = document.createElement('input') as HTMLInputElement
        const inp3 = document.createElement('input') as HTMLInputElement
        const inp4 = document.createElement('input') as HTMLInputElement
        const inp5 = document.createElement('input') as HTMLInputElement
        [inp1, inp2, inp3, inp4, inp5].forEach((item, ind, arr) => {
          item.classList.add('simple-input')
          item.type = 'text'
          arr[0].style.top = `-6%`;
          arr[0].style[side] = `62%`

          arr[1].style.top = `-8%`;
          arr[1].style[side] = `-3%`

          arr[2].style.top = `30%`;
          arr[2].style[side] = `-16%`

          arr[3].style.bottom = `24%`;
          arr[3].style[side] = `52%`

          arr[4].style.bottom = `4%`;
          arr[4].style[side] = `59%`
          parentNode.append(item)
        })
      }
      if (child.el.subgroup === '5' && child.el.code === '5') {
        const inp1 = document.createElement('input') as HTMLInputElement
        const inp2 = document.createElement('input') as HTMLInputElement
        const inp3 = document.createElement('input') as HTMLInputElement
        const inp4 = document.createElement('input') as HTMLInputElement
        [inp1, inp2, inp3, inp4].forEach((item, ind, arr) => {
          item.classList.add('simple-input')
          item.type = 'text'
          arr[0].style.top = `-16%`;
          arr[0].style[side] = `46%`

          arr[1].style.top = `40%`;
          arr[1].style[side] = `-25%`

          arr[2].style.bottom = `5%`;
          arr[2].style[side] = `22%`

          arr[3].style.bottom = `5%`;
          arr[3].style[side] = `76%`
          parentNode.append(item)
        })
      }
      if (child.el.subgroup === '5' && child.el.code === '6' && side === 'left') {
        const inp1 = document.createElement('input') as HTMLInputElement
        const inp2 = document.createElement('input') as HTMLInputElement
        const inp3 = document.createElement('input') as HTMLInputElement
        const inp4 = document.createElement('input') as HTMLInputElement
        [inp1, inp2, inp3, inp4].forEach((item, ind, arr) => {
          item.classList.add('simple-input')
          item.type = 'text'
          arr[0].style.top = `14%`;
          arr[0].style[side] = `-23%`

          arr[1].style.top = `14%`;
          arr[1].style[side] = `13%`

          arr[2].style.bottom = `24%`;
          arr[2].style[side] = `45%`

          arr[3].style.bottom = `-20%`;
          arr[3].style[side] = `63%`
          parentNode.append(item)
        })
      } else if (child.el.subgroup === '5' && child.el.code === '6' && side === 'right') {
        const inp1 = document.createElement('input') as HTMLInputElement
        const inp2 = document.createElement('input') as HTMLInputElement
        [inp1, inp2].forEach((item, ind, arr) => {
          item.classList.add('simple-input')
          item.type = 'text'
          arr[0].style.top = `22%`;
          arr[0].style[side] = `-27%`

          arr[1].style.top = `71%`;
          arr[1].style[side] = `19%`
          parentNode.append(item)
        })
      }
    }
    console.log(parentNode);
    console.log(child);
  }
}
