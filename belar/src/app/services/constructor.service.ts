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
  private ShSDiameters = [12, 15, 16, 17, 20, 25, 30, 35, 40, 45, 50, 60]
  private diameters = ['M12x1,5','M14x1,5','M16x1,5','M18x1,5','M20x1,5','M22x1,5','M27x1,5','M27x2','M30x2', 'G1/4','G3/8', 'G1/2', 'K3/8']
  private shortDiameters = ['M14x1,5','M16x1,5','M18x1,5','M20x1,5','M22x1,5','M27x1,5','M30x2', 'G1/4','G3/8']

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
    img.style.maxHeight = `75px`
    setTimeout(() => {
      parentNode.style.transform = `translateY(${-img.clientHeight * 100}px)`
      parentNode.style.top = -img.clientHeight + 'px';
      parentNode.style.height = img.clientHeight + 'px'
      parentNode.classList.add('topSlide')
    }, 500);
    this.createInputs(parentNode, child)
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

  createSelect(label: HTMLLabelElement, arr: number[] | string[], side: string, subgroup: string | null): void {
    const select = document.createElement('select') as HTMLSelectElement
    arr.forEach(size => {
      const option = document.createElement('option');
      option.value = option.innerText = size + ''
      if (side === `left` || side === 'right') {
        if (subgroup !== `2.1`) {
          if (size === 20) option.selected = true
        } else {
          if (size === 40) option.selected = true
        }
      } else {
        if (size === 'M20x1,5') option.selected = true
      }
      select.append(option)
    })
    select.classList.add('simple-input');
    select.style.position = `static`
    select.style.width = `40px`;
    if (side === 'left') {
      label.append('ШС Ø: ', select)
    } else if (side === 'right') {
      if (subgroup === '1.2' || subgroup === '2.1') {
        label.append(select, ' ШС Ø')
      } else {
        label.append('ШС Ø: ', select)
      }
    }
    if (side === 'topleft' || side === 'topright') {
      label.append(select)
      select.style.width = `80px`;
    }
  }
  inputClassAdd(...inpArr: any) {
    inpArr.forEach((inp: HTMLInputElement) => {
      inp.classList.add('simple-input')
      inp.style.position = `relative`
      inp.setAttribute('onkeyup', `this.value = this.value.replace(/[^0-9]/g,'')`)
    })
  }

  labelClassAdd(parent: HTMLDivElement, ...labels: any) {
    labels.forEach((label: HTMLLabelElement) => {
      label.classList.add('simple-label')
      parent.append(label)
    })
  }

  //TODO Оптимизировать код. Написать общую функцию
  createInputs(parentNode: HTMLDivElement, child: { el: Item, side: string }) {
    if (child.side === 'left' || child.side === 'right') {
      const side = child.side
      if (child.el.subgroup === '1.1') {
        const label1 = document.createElement('label') as HTMLLabelElement
        const inp1 = document.createElement('input') as HTMLInputElement
        const label2 = document.createElement('label') as HTMLLabelElement
        const label3 = document.createElement('label') as HTMLLabelElement
        const inp3 = document.createElement('input') as HTMLInputElement
        this.inputClassAdd(inp1, inp3)
        this.labelClassAdd(parentNode, label1, label2, label3)
        label1.append(inp1);
        label3.append(inp3);
        label1.style.top = `-15%`;
        label1.style[side] = `55%`;
        label2.style.top = `18%`;
        label2.style[side] = side === `left` ? `32%` : `53%`;
        this.createSelect(label2, this.ShSDiameters, side, child.el.subgroup)
        label3.style.bottom = `20%`;
        label3.style[side] = `-15%`;
      }
      if (child.el.subgroup === '1.2') {
        const label1 = document.createElement('label') as HTMLLabelElement
        const label2 = document.createElement('label') as HTMLLabelElement
        const inp2 = document.createElement('input') as HTMLInputElement
        const label3 = document.createElement('label') as HTMLLabelElement
        const inp3 = document.createElement('input') as HTMLInputElement;
        this.inputClassAdd(inp2, inp3)
        this.labelClassAdd(parentNode, label1, label2, label3)
        label2.append(`S`, inp2)
        label3.append(inp3);
        label1.style.top = `15%`;
        label1.style[side] = `-60%`;
        this.createSelect(label1, this.ShSDiameters, side, child.el.subgroup)
        label2.style.bottom = `10%`;
        label2.style[side] = `-23%`;
        label3.style.top = `38%`;
        label3.style[side] = `-23%`;
      }
      if (child.el.subgroup === '2.1') {
        const label1 = document.createElement('label') as HTMLLabelElement
        const inp1 = document.createElement('input') as HTMLInputElement
        const label2 = document.createElement('label') as HTMLLabelElement
        const label3 = document.createElement('label') as HTMLLabelElement
        const inp3 = document.createElement('input') as HTMLInputElement
        const label4 = document.createElement('label') as HTMLLabelElement
        const inp4 = document.createElement('input') as HTMLInputElement
        this.inputClassAdd(inp1, inp3, inp4)
        label1.append(inp1)
        label3.append(inp3)
        label4.append(inp4)

        label1.style.top = `-12%`;
        label1.style[side] = `-15%`
        label2.style.top = `7%`;
        label2.style[side] = `-63%`
        this.createSelect(label2, this.ShSDiameters, side, child.el.subgroup)
        label3.style.bottom = `26%`;
        label3.style[side] = `-25%`
        label4.style.bottom = `3%`;
        label4.style[side] = `60%`
        this.labelClassAdd(parentNode, label1, label2, label3, label4)
      }
      if (child.el.subgroup === '2.2') {
        const label1 = document.createElement('label') as HTMLLabelElement
        const inp1 = document.createElement('input') as HTMLInputElement
        const label2 = document.createElement('label') as HTMLLabelElement
        const label3 = document.createElement('label') as HTMLLabelElement
        const inp3 = document.createElement('input') as HTMLInputElement
        const label4 = document.createElement('label') as HTMLLabelElement
        const inp4 = document.createElement('input') as HTMLInputElement
        this.inputClassAdd(inp1, inp3, inp4)
        this.labelClassAdd(parentNode, label1, label2, label3, label4)
        label1.style.top = `-11%`;
        label1.style[side] = `52%`
        label1.append(inp1)
        label2.style.top = `15%`;
        label2.style[side] = side === `left` ? `15%` : `39%`
        this.createSelect(label2, this.ShSDiameters, side, child.el.subgroup)
        label3.style.bottom = `36%`;
        label3.style[side] = `-18%`
        label3.append(inp3)
        label4.style.bottom = `6%`;
        label4.style[side] = `67%`
        label4.append(inp4)
      }
      if (child.el.subgroup === '3.1') {
        const label1 = document.createElement('label') as HTMLLabelElement
        const inp1 = document.createElement('input') as HTMLInputElement
        const label2 = document.createElement('label') as HTMLLabelElement
        const inp2 = document.createElement('input') as HTMLInputElement
        const label3 = document.createElement('label') as HTMLLabelElement
        const inp3 = document.createElement('input') as HTMLInputElement
        this.inputClassAdd(inp1, inp2, inp3)
        this.labelClassAdd(parentNode, label1, label2, label3)
        label1.style.top = `-10%`;
        label1.style[side] = `54%`
        label1.append(inp1)
        label2.style.top = `14%`;
        label2.style[side] = `52%`
        label2.append(inp2)
        label3.style.bottom = `22%`;
        label3.style[side] = `-13%`
        label3.append(inp3)
      }
      if (child.el.subgroup === '3.2') {
        const label1 = document.createElement('label') as HTMLLabelElement
        const inp1 = document.createElement('input') as HTMLInputElement
        const label2 = document.createElement('label') as HTMLLabelElement
        const inp2 = document.createElement('input') as HTMLInputElement
        const label3 = document.createElement('label') as HTMLLabelElement
        const inp3 = document.createElement('input') as HTMLInputElement
        this.inputClassAdd(inp1, inp2, inp3)
        this.labelClassAdd(parentNode, label1, label2, label3)
        label1.append(inp1)
        label2.append(inp2)
        label3.append(inp3)
        label1.style.top = `-15%`;
        label1.style[side] = `-20%`
        label2.style.top = `30%`;
        label2.style[side] = `-25%`
        label3.style.bottom = `0%`;
        label3.style[side] = `-20%`
      }
      if (child.el.subgroup === '4.1') {
        const label1 = document.createElement('label') as HTMLLabelElement
        const inp1 = document.createElement('input') as HTMLInputElement
        const label2 = document.createElement('label') as HTMLLabelElement
        const inp2 = document.createElement('input') as HTMLInputElement
        const label3 = document.createElement('label') as HTMLLabelElement
        const inp3 = document.createElement('input') as HTMLInputElement
        const label4 = document.createElement('label') as HTMLLabelElement
        const inp4 = document.createElement('input') as HTMLInputElement
        const label5 = document.createElement('label') as HTMLLabelElement
        const inp5 = document.createElement('input') as HTMLInputElement
        const label6 = document.createElement('label') as HTMLLabelElement
        const inp6 = document.createElement('input') as HTMLInputElement
        this.inputClassAdd(inp1, inp2, inp3, inp4, inp5, inp6)
        this.labelClassAdd(parentNode, label1, label2, label3, label4, label5, label6)
        label1.append(inp1)
        label2.append(inp2)
        label3.append(inp3)
        label4.append(inp4)
        label5.append(inp5)
        label6.append(`S`, inp6)
        label1.style.top = `-7%`;
        label1.style[side] = `66%`
        label2.style.top = `8%`;
        label2.style[side] = `60%`
        label3.style.top = `22%`;
        label3.style[side] = `37%`
        label4.style.bottom = `35%`;
        label4.style[side] = `-16%`
        label5.style.bottom = `34%`;
        label5.style[side] = `13%`
        label6.style.bottom = `0%`;
        label6.style[side] = `34%`
      }
      if (child.el.subgroup === '4.2') {
        const label1 = document.createElement('label') as HTMLLabelElement
        const inp1 = document.createElement('input') as HTMLInputElement
        const label2 = document.createElement('label') as HTMLLabelElement
        const inp2 = document.createElement('input') as HTMLInputElement
        const label3 = document.createElement('label') as HTMLLabelElement
        const inp3 = document.createElement('input') as HTMLInputElement
        const label4 = document.createElement('label') as HTMLLabelElement
        const inp4 = document.createElement('input') as HTMLInputElement
        const label5 = document.createElement('label') as HTMLLabelElement
        const inp5 = document.createElement('input') as HTMLInputElement
        const label6 = document.createElement('label') as HTMLLabelElement
        const inp6 = document.createElement('input') as HTMLInputElement
        this.inputClassAdd(inp1, inp2, inp3, inp4, inp5, inp6)
        this.labelClassAdd(parentNode, label1, label2, label3, label4, label5, label6)
        label1.append(inp1)
        label2.append(`S`, inp2)
        label3.append(inp3)
        label4.append(inp4)
        label5.append(inp5)
        label6.append(`Ширина паза: `, inp6)
        label1.style.top = `-6%`;
        label1.style[side] = `62%`
        label2.style.top = `-8%`;
        label2.style[side] = `-3%`
        label3.style.top = `30%`;
        label3.style[side] = `-16%`
        label4.style.bottom = `24%`;
        label4.style[side] = `52%`
        label5.style.bottom = `4%`;
        label5.style[side] = `59%`
        label6.style.top = `-20%`;
        label6.style[side] = `10%`
        label6.style.width = `140px`
      }
      if (child.el.subgroup === '5' && child.el.code === '5') {
        const label1 = document.createElement('label') as HTMLLabelElement
        const inp1 = document.createElement('input') as HTMLInputElement
        const label2 = document.createElement('label') as HTMLLabelElement
        const inp2 = document.createElement('input') as HTMLInputElement
        const label3 = document.createElement('label') as HTMLLabelElement
        const inp3 = document.createElement('input') as HTMLInputElement
        const label4 = document.createElement('label') as HTMLLabelElement
        const inp4 = document.createElement('input') as HTMLInputElement
        this.inputClassAdd(inp1, inp2, inp3, inp4)
        this.labelClassAdd(parentNode, label1, label2, label3, label4)
        label1.append(inp1)
        label2.append(inp2)
        label3.append(inp3)
        label4.append(`S`, inp4)
        label1.style.top = `-16%`;
        label1.style[side] = `46%`;
        label2.style.top = `40%`;
        label2.style[side] = `-25%`;
        label3.style.bottom = `5%`;
        label3.style[side] = `22%`;
        label4.style.bottom = `-8%`;
        label4.style[side] = `65%`;
      }
      if (child.el.subgroup === '5' && child.el.code === '6' && side === 'left') {
        const label1 = document.createElement('label') as HTMLLabelElement
        const inp1 = document.createElement('input') as HTMLInputElement
        const label2 = document.createElement('label') as HTMLLabelElement
        const inp2 = document.createElement('input') as HTMLInputElement
        const label3 = document.createElement('label') as HTMLLabelElement
        const inp3 = document.createElement('input') as HTMLInputElement
        const label4 = document.createElement('label') as HTMLLabelElement
        const inp4 = document.createElement('input') as HTMLInputElement
        this.inputClassAdd(inp1, inp2, inp3, inp4)
        this.labelClassAdd(parentNode, label1, label2, label3, label4)
        label1.append(inp1)
        label2.append(inp2)
        label3.append(inp3)
        label4.append(inp4)
        label1.style.top = `14%`;
        label1.style[side] = `-23%`
        label2.style.top = `14%`;
        label2.style[side] = `13%`
        label3.style.bottom = `24%`;
        label3.style[side] = `45%`
        label4.style.bottom = `-20%`;
        label4.style[side] = `63%`
      } else if (child.el.subgroup === '5' && child.el.code === '6' && side === 'right') {
        const label1 = document.createElement('label') as HTMLLabelElement
        const inp1 = document.createElement('input') as HTMLInputElement
        const label2 = document.createElement('label') as HTMLLabelElement
        const inp2 = document.createElement('input') as HTMLInputElement
        this.inputClassAdd(inp1, inp2)
        this.labelClassAdd(parentNode, label1, label2)
        label1.append(inp1)
        label2.append(inp2)
        label1.style.top = `22%`;
        label1.style[side] = `-27%`
        label2.style.top = `71%`;
        label2.style[side] = `19%`
      }
    } else if (child.side === 'topleft' || child.side === 'topright') {

      // if (child.el.subgroup === '1' || child.el.subgroup === '2' || child.el.subgroup === '3' || child.el.subgroup === '4') {

        const label1 = document.createElement('label') as HTMLLabelElement
        const label2 = document.createElement('label') as HTMLLabelElement
        const inp2 = document.createElement('input') as HTMLInputElement
        const label3 = document.createElement('label') as HTMLLabelElement
        const inp3 = document.createElement('input') as HTMLInputElement

        this.createSelect(label1, child.el.subgroup === '4' ? this.shortDiameters : this.diameters, child.side, child.el.subgroup)
        this.inputClassAdd(inp2, inp3)
        this.labelClassAdd(parentNode, label1, label2, label3)
        label2.append(inp2)
        if (child.el.subgroup === '4' || child.el.subgroup === '5') label3.append(inp3)
          label1.style.top = `-20px`
          label1.style.left = `-30%`
          label2.style.top = `-20px`
          label2.style.left = `120%`
          label3.style.left = `120%`
          label3.style.top = `10%`
      }

    }
}
