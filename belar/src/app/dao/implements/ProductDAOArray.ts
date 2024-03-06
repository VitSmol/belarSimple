import { Observable, filter } from "rxjs";
import { ProductDAO } from "../interfaces/ProductDAO";
import { Product } from "../interfaces/interfaces";
import { HttpClient } from "@angular/common/http";

export class ProductDAOArray implements ProductDAO {
  url: string = "assets/data/data.json";

  constructor(
    private http: HttpClient
  ) {

  }
  getOne(unit: string): Observable<any> {
    // throw new Error("Method not implemented.");
    return this.http.get<Product>(this.url)
  }
  readAll(): Observable<Product[]> {
    return this.http.get<Product[]>(this.url)
  }
  create(unit: Product): Observable<Product> {
    throw new Error("Method not implemented.");
  }
  read(id: string): Observable<Product> {
    throw new Error("Method not implemented.");
  }
  update(unit: Product): Observable<Product> {
    throw new Error("Method not implemented.");
  }
  delete(id: string): Observable<Product> {
    throw new Error("Method not implemented.");
  }

}
