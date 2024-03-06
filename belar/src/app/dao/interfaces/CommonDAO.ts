import { Observable } from "rxjs";

export interface CommonDAO<T> {
  getOne(unit: string): Observable<T>;
  readAll(): Observable<T[]>;
  create(unit: T): Observable<T>;
  read(id: string): Observable<T>;
  update(unit: T): Observable<T>;
  delete(id: string): Observable<T>;
}
