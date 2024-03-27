import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Item, Product } from 'src/app/dao/interfaces/interfaces';

@Component({
  selector: 'app-cart-dialog',
  templateUrl: './cart-dialog.component.html',
  styleUrl: './cart-dialog.component.sass'
})

export class CartDialogComponent {
  item: Product;
  constructor(
    private cartDialog: MatDialogRef<CartDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private data: {item: Product}
    ) {
      this.item = data.item;
      console.log(this.item);


    }
}
