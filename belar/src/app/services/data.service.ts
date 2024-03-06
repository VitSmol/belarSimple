import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductDAOArray } from '../dao/implements/ProductDAOArray';
import { Observable, filter } from 'rxjs';
import { Product } from '../dao/interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http: HttpClient
  ) { }

  private productsDAO = new ProductDAOArray(this.http)

  getAll(): Observable<Product[]> {
    return this.productsDAO.readAll()
  }

  getOne(unit: string) {
    return this.productsDAO.getOne(unit)
  }
}
