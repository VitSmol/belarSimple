import { Component, Input, ViewChild } from '@angular/core';
import { Item, Product } from 'src/app/dao/interfaces/interfaces';
import { PageEvent, MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { CartDialogComponent } from 'src/app/shared/cart-dialog/cart-dialog.component';

@Component({
  selector: 'app-products-list-all',
  templateUrl: './products-list-all.component.html',
  styleUrls: ['./products-list-all.component.sass'],
})
export class ProductsListAllComponent {
  // @ViewChild(MatPaginator, { static: false }) paginator!: MatPaginator

  constructor(
    private dialog: MatDialog
  ){

  }
  public productsArr: Product[] = [];
  public productsSlice: Product[] = [];


  @Input('productsArr') public set setProducts(productsArr: Product[]) {
    this.productsArr = productsArr;
    this.productsSlice = this.productsArr.slice(0, 10)
  }

  ngOnInit(): void {

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
  openDialog(item: Product) {
    const cartDialog = this.dialog.open(CartDialogComponent, {
      data: item,
      autoFocus: true,
      width: `50vw`,
      height: `50vh`
    })
    cartDialog.afterClosed().subscribe((result: {message: string, item: Item}) => {
      console.log(result);

    })
  }
}


