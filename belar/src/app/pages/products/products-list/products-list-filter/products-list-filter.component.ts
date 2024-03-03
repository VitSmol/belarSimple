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

  public intersectPistonDiameters: string[] = []
  public searchPistonDiameters: string[] = ['32']; //! стартовое значение диметра поршня
  // filteredDiamP: string[] = [];
  // Observable<string[]>;
  pistonDiameterControl = new FormControl();

  query!: query

  @Input('query') public set setProducts(query: query) {
    setTimeout(() => {
      this.query = query
      // this.updateIntersectArr(this.intersectPistonDiameters, this.query.pa_diamp, this.searchPistonDiameters)
      this.intersectPistonDiameters = this.intersection(this.query.pa_diamp, this.searchPistonDiameters)
      // console.log(this.query);
    }, 5);
  }

  @ViewChild('diamPInput')
  diamPInput!: ElementRef<HTMLInputElement>;

  //* Новый способ

  //! intersectArr - массив для отображения размеров
  //! query.pa_diamp - общий массив размеров
  //! searchPistonDiametres - массив с уже введенными размерами
  intersection = (arr1: any, arr2: any) => {
    return arr1.filter((el: any) => !arr2.includes(el))
  }
  updateIntersectArr(intersectArr: string[], initialArr: string[], searchArr: string[]) {
    this.intersection(initialArr, searchArr).forEach((element: any, index: any) => {
      intersectArr[index] = element;
    });
  }

  filter(arr: string[], value: string) {
    return arr.filter(item => item.toLocaleLowerCase().includes(value))
  }
  //*
  //! Метод, срабатывающий при вводе запроса в input
  input(inputElement: any, intersectArr: string[], initialArr: string[], searchArr: string[]) {
    // console.log(intersectArr);

    // //! при начале ввода значений делаем разницу массивов
    this.updateIntersectArr(intersectArr, initialArr, searchArr);
    // //! определяем текущее введенное значение
    let searchValue = inputElement.value;
    // //! В массиве для отображения размеров ищем введенное значение

    let tempArr = this.filter(intersectArr, searchValue)
    intersectArr.length = 0;
    tempArr.forEach((el: any, ind: any) => {
      intersectArr[ind] = el
    })
    console.log(intersectArr);
    console.log(this.intersectPistonDiameters);

  }

  //! Метод для добавления Чипса при вводе в инпут
  add(event: MatChipInputEvent, intersectArr: string[], initialArr: string[], searchArr: string[]) {
    const value = (event.value || "").trim();
    if (value && intersectArr.includes(value) && !searchArr.includes(value)) {
      console.log(`In add method: ${value}` );

      searchArr.push(value)
      let tempArr = [...new Set(searchArr)];
      searchArr.length = 0;
      tempArr.forEach((el : any, ind: number) => {
        searchArr[ind] = el
      })
      this.updateIntersectArr(intersectArr, initialArr, searchArr);
    }
    event.chipInput.clear();
    this.pistonDiameterControl.setValue(null)
    event.value = ''
  }

  remove(item: string, intersectArr: string[], initialArr: string[], searchArr: string[]) {
    const index = searchArr.indexOf(item);
    if (index > -1) {
      searchArr.splice(index, 1)
      this.updateIntersectArr(intersectArr, initialArr, searchArr);
    }
  }

  selected(event: MatAutocompleteSelectedEvent, inputElement: any, intersectArr: string[], initialArr: string[], searchArr: string[]) {
    console.log(event);

    inputElement.value = null
    console.log(`in selected method: ${event.option.viewValue}`);

    searchArr.push(event.option.viewValue)
    let tempArr = [...new Set(searchArr)];
    searchArr.length = 0;
    tempArr.forEach((el : any, ind: number) => {
      searchArr[ind] = el
    })
    this.pistonDiameterControl.setValue(null)
    this.updateIntersectArr(intersectArr, initialArr, searchArr);
    console.log();

  }

log(ev: any) {
  console.log(ev);

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
