import { Component } from '@angular/core';

@Component({
  selector: 'app-bottom',
  templateUrl: './bottom.component.html',
  styleUrl: './bottom.component.sass'
})
export class BottomComponent {
  public barArray: number[] = [160, 180, 200, 210, 230, 240, 250, 260, 280, 300, 400]
  selectedBar = 160
  public braking = [
    `нет`,
    `при втягивании`,
    `при выдвижении`,
    `при втягивании и выдвижении`
  ]
  public hydLock = [
    `нет`,
    `в поршневой части`,
    `в штоковой части`,
    `в обеих частях`
  ]
  public hydroType = [`Поршневой`, `Двухштоковый`, `Плунженрныйы`]

  checkNums(ev: KeyboardEvent): void {
    (ev.target as HTMLInputElement).value = (ev.target as HTMLInputElement).value.replace(/[^0-9]/g, '')
  }
}
