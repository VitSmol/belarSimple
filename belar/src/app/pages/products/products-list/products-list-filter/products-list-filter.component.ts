import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { query } from 'src/app/dao/interfaces/interfaces';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-products-list-filter',
  templateUrl: './products-list-filter.component.html',
  styleUrls: ['./products-list-filter.component.sass']
})
export class ProductsListFilterComponent {
  separatorKeysCodes: number[] = [ENTER, COMMA]

  filteredDiamP!: Observable<string[]>;

  public pistonDiameter: String[] = []; //! Диаметр поршня
  public rodDiameter: String[] = [];    //! Диаметр штока
  public pistonStroke: String[] = [];   //! Ход поршня


  @Input('query') public set setProducts(query: query) {
    this.pistonDiameter = query.pa_diamp
    this.rodDiameter = query.pa_diamsh
    this.pistonStroke = query.pa_hod
  }

  @ViewChild('diamPInput')
  diamPInput!: ElementRef<HTMLInputElement>;

  remove(item: String) {

  }

  add($event: MatChipInputEvent) {
    throw new Error('Method not implemented.');
    }
    selected($event: MatAutocompleteSelectedEvent) {
    throw new Error('Method not implemented.');
    }

}
