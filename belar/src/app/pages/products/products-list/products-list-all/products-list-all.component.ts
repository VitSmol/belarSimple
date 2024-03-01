import { Component, Input, ViewChild } from '@angular/core';
import { Product } from 'src/app/dao/interfaces/interfaces';
import { PageEvent, MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-products-list-all',
  templateUrl: './products-list-all.component.html',
  styleUrls: ['./products-list-all.component.sass'],
})
export class ProductsListAllComponent {
  // @ViewChild(MatPaginator, { static: false }) paginator!: MatPaginator

  public productsArr: Product[] = [];
  public productsSlice: Product[] = [];


  @Input('productsArr') public set setProducts(productsArr: Product[]) {
    this.productsArr = productsArr;
    this.productsSlice = this.productsArr.slice(0, 10)
  }

  ngOnInit(): void {
    setTimeout(() => {
      const pageLabel = document.getElementById('mat-paginator-page-size-label-0');
      (pageLabel as HTMLElement).innerText = "Товаров на странице:"

    }, 0);

  }
  //! Расчет текущего количества страниц
  pageHandler(event: any): void {
    console.log(event);
    const startIndex = event.pageIndex * event.pageSize
    let endIndex = startIndex + event.pageSize
    if (endIndex > this.productsArr.length) {
      endIndex = this.productsArr.length
    }
    this.productsSlice = this.productsArr.slice(startIndex, endIndex)

  }
}


