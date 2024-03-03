import { Component, ElementRef, Input, OnInit, Query, ViewChild, inject } from '@angular/core';
import { query } from 'src/app/dao/interfaces/interfaces';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Observable } from 'rxjs/internal/Observable';
import { FormControl } from '@angular/forms';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { map, startWith } from 'rxjs';

@Component({
  selector: 'app-products-list-filter',
  templateUrl: './products-list-filter.component.html',
  styleUrls: ['./products-list-filter.component.sass']
})
export class ProductsListFilterComponent {

  private searchValue: string = '';

  separatorKeysCodes: number[] = [ENTER, COMMA]

  public intersectArr: string[] = []
  public currentPistonDiameters: string[] = ['32']; //! стартовое значение диметра поршня
  // filteredDiamP: string[] = [];
  // Observable<string[]>;
  pistonDiameterControl = new FormControl();

  query!: query

  @Input('query') public set setProducts(query: query) {
    setTimeout(() => {
      this.query = query
      this.intersectArr = this.intersection(this.query.pa_diamp, this.currentPistonDiameters)
      // console.log(this.query);
    }, 5);
  }

  @ViewChild('diamPInput')
  diamPInput!: ElementRef<HTMLInputElement>;

  //* Новый способ

  //! intersectArr - массив для отображения размеров
  //! query.pa_diamp - общий массив размеров
  //! currentPistonDiametres - массив с уже введенными размерами
  intersection = (arr1: any, arr2: any) => {
    return arr1.filter((el: any) => !arr2.includes(el))
  }
  updateIntersectArr() {
    this.intersectArr = this.intersection(this.query.pa_diamp, this.currentPistonDiameters)
  }

  filter(arr: string[], value: string) {
    return arr.filter(item => item.toLocaleLowerCase().includes(value))
  }
  //*
  //! Метод, срабатывающий при вводе запроса в input
  input(inputElement: any) {
    console.dir(inputElement);

    // //! при начале ввода значений делаем разницу массивов
    this.updateIntersectArr();
    // //! определяем текущее введенное значение
    let searchValue = inputElement.value;
    // //! В массиве для отображения размеров ищем введенное значение
    this.intersectArr = this.filter(this.intersectArr, searchValue)
  }

  //! Метод для добавления Чипса при вводе в инпут
  add(event: MatChipInputEvent) {
    const value = (event.value || "").trim();
    if (value && this.intersectArr.includes(value) && !this.currentPistonDiameters.includes(value)) {
      this.currentPistonDiameters.push(value)
      this.updateIntersectArr();
    }
    event.chipInput.clear();
    this.pistonDiameterControl.setValue(null)
    event.value = ''
  }

  remove(item: string) {
    const index = this.currentPistonDiameters.indexOf(item);
    if (index > -1) {
      this.currentPistonDiameters.splice(index, 1)
      this.updateIntersectArr();
    }
    console.log(index);
  }

  selected(event: MatAutocompleteSelectedEvent) {
    this.currentPistonDiameters.push(event.option.viewValue)
    this.updateIntersectArr();
    console.log();

  }



  //* конец нового способа
  //! СТАРЫЙ ПОЛУРАБОЧИЙ МЕТОД
  // announcer = inject(LiveAnnouncer)

  // constructor() {
  //   // this.filteredDiamP.map((item) => item ? this._filter(item) : this.filteredDiamP.slice())
  // }
  // ngOnInit(): void {
  // }

  // add(event: MatChipInputEvent) {
  //   const value = (event.value || '').trim();
  //   if (value && this.filteredDiamP.includes(value)) {
  //     this.currentPistonDiameters.push(value);
  //   }
  //   // this.filteredDiamP = this.filteredDiamP._filter(value => item.toLowerCase().includes(filterValue))
  //   event.chipInput!.clear()
  //   this.pistonDiameterControl.setValue(null)
  //   this.searchValue = ''
  // }

  // log(event: Event) {
  //   console.log(this.diamPInput);

  //   this.searchValue += (event as InputEvent).data
  //   // console.log(this.searchValue);
  // }

  // remove(item: string) {
  //   const index = this.currentPistonDiameters.indexOf(item)
  //   if (index >= 0) {
  //     this.currentPistonDiameters.splice(index, 1);
  //   }
  // }

  // selected(event: MatAutocompleteSelectedEvent) {
  //   console.log(event);

  //   this.currentPistonDiameters.push(event.option.viewValue);
  //   (this.diamPInput.nativeElement as unknown as string) = '';
  //   this.pistonDiameterControl.setValue(null)
  // }

  // _filter(item: string): any {
  //   const filterValue = item.toLowerCase();
  //   return this.filteredDiamP.filter(item => item.toLowerCase().includes(filterValue))
  // }

}
