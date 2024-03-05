import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/dao/interfaces/interfaces';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.sass']
})
export class ProductsListComponent implements OnInit {
  public commonArr: Product[] = [];
  public productsArr: Product[] = [];
  public query = {
    pa_hod: [''],
    pa_diamp: [''],
    pa_diamsh: [''],
  }

  constructor(
    private serv: DataService
  ) { }

  ngOnInit(): void {
    this.serv.getAll().subscribe((data: Product[]) => {
      this.commonArr = [...this.productsArr] = data;

      data.forEach(((el: Product) => {
        if (el.pa_hod) this.query.pa_hod.push(el.pa_hod);
        if (el.pa_diamp) this.query.pa_diamp.push(el.pa_diamp);
        if (el.pa_diamsh) this.query.pa_diamsh.push(el.pa_diamsh);
      }
      ))
      this.query.pa_diamp = [...new Set(this.query.pa_diamp)].sort((a: any, b: any) => a - b)
      this.query.pa_diamsh = [...new Set(this.query.pa_diamsh)].sort((a: any, b: any) => a - b)
      this.query.pa_hod = [...new Set(this.query.pa_hod)].sort((a: any, b: any) => a - b)
      for (let [key, val] of Object.entries(this.query)) {
        val.splice(0, 1)
      }
      // console.log(this.query);
    })
  }
  filterArrayByObject(obj: any, arr: Product[]) {
    let result: Product[] = arr;

    for (let [key, val] of Object.entries(obj)) {
      if ((val as string[]).length > 0) {
        result = result.filter((item: any) => obj[key].includes(item[key]));
      }

    }
    console.log(result);
    return result;
  }

  outQuery(query: any) {
    //! функция проверяет, что все поля в объекте ложные
    const isQueryEmpty = (obj: any) => {
      for (const key in obj) {
        if (obj[key].length > 0) {
          return false
        }
      }
      return true
    }
    if (isQueryEmpty(query)) {
      this.commonArr = [...this.productsArr]
    }
    this.commonArr = this.filterArrayByObject(query, this.productsArr)
  }
}




