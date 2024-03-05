import { Component, ElementRef, EventEmitter, Input, OnInit, Output, Query, ViewChild, inject } from '@angular/core';
import { query } from 'src/app/dao/interfaces/interfaces';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-products-list-filter',
  templateUrl: './products-list-filter.component.html',
  styleUrls: ['./products-list-filter.component.sass']
})
export class ProductsListFilterComponent {

  separatorKeysCodes: number[] = [ENTER, COMMA]

  public intersectPistonDiameters: string[] = []
  public searchPistonDiameters: string[] = []; //! стартовое значение диметра поршня

  public intersectStockDiameters: string[] = []
  public searchStockDiameters: string[] = []; //! стартовое значение диметра штока

  public intersectPistonStroke: string[] = []
  public searchPistonStroke: string[] = []; //! стартовое значение хода поршня]


  pistonDiameterControl = new FormControl();
  stockDiameterControl = new FormControl();
  pistonHodControl = new FormControl();

  query!: query

  @Input('query') public set setProducts(query: query) {
    setTimeout(() => {
      this.query = query
      this.intersectPistonDiameters = this.intersection(this.query.pa_diamp, this.searchPistonDiameters)
      this.intersectStockDiameters = this.intersection(this.query.pa_diamsh, this.searchStockDiameters)
      this.intersectPistonStroke = this.intersection(this.query.pa_hod, this.searchPistonStroke)
      console.log(this.query.pa_hod);

    }, 200);
  }

  @Output() outQuery = new EventEmitter();

  @ViewChild('diamPInput')
  diamPInput!: ElementRef<HTMLInputElement>;

  @ViewChild('diamShInput')
  diamShInput!: ElementRef<HTMLInputElement>;

  @ViewChild('hodPInput')
  hodPInput!: ElementRef<HTMLInputElement>;

  //* Новый способ

  intersection = (arr1: any, arr2: any) => {
    return arr1.filter((el: any) => !arr2.includes(el))
  }
  updateIntersectArr(intersectArr: string[], initialArr: string[], searchArr: string[]) {
    const tempArr = this.intersection(initialArr, searchArr)
    intersectArr.length = 0
    tempArr.forEach((element: any, index: any) => {
      intersectArr[index] = element;
    });
  }

  filter(arr: string[], value: string) {
    return arr.filter(item => item.toLocaleLowerCase().includes(value))
  }

  //*
  //! Метод, срабатывающий при вводе запроса в input
  input(event: any, inputElement: any, intersectArr: string[], initialArr: string[], searchArr: string[]) {
    event.preventDefault()
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
  }

  //! Метод для добавления Чипса при вводе в инпут
  add(event: MatChipInputEvent, intersectArr: string[], initialArr: string[], searchArr: string[]) {
    const value = (event.value || "").trim();
    if (value && intersectArr.includes(value) && !searchArr.includes(value)) {

      searchArr.push(value)
      let tempArr = [...new Set(searchArr)];
      searchArr.length = 0;
      tempArr.forEach((el: any, ind: number) => {
        searchArr[ind] = el
      })
      this.updateIntersectArr(intersectArr, initialArr, searchArr);
    }
    event.chipInput.clear();
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
    inputElement.value = ""
    searchArr.push(event.option.viewValue)
    let tempArr = [...new Set(searchArr)];
    searchArr.length = 0;
    tempArr.forEach((el: any, ind: number) => {
      searchArr[ind] = el
    })
    this.updateIntersectArr(intersectArr, initialArr, searchArr);
  }

  changeInput(ev: any, inputElement: any) {
    inputElement.value = ev.option.value
  }

  resetValues(e: any) {
    e.preventDefault();
    this.searchPistonDiameters = []
    this.searchPistonStroke = []
    this.searchStockDiameters = []
    this.find(e)
  }

  find(e: any) {
    e.preventDefault()
    // if (this.searchPistonDiameters.length || this.searchStockDiameters.length || this.searchPistonStroke.length) {
      this.outQuery.emit({
        pa_diamp: this.searchPistonDiameters,
        pa_diamsh: this.searchStockDiameters,
        pa_hod: this.searchPistonStroke
      })
    // }
  }
}
