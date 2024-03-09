import { Observable } from "rxjs";
import { ConstructDAO } from "../interfaces/ConstructDAO";
import { Construct } from "../interfaces/interfaces";
import { HttpClient } from "@angular/common/http";

export class ConstructDAOArray implements ConstructDAO {
  url: string = "assets/data/constructor.json"

  constructor(
    private http: HttpClient
  ){}

  getAll(): Observable<Construct> {
    return this.http.get<Construct>(this.url)
  }

  getOne(unit: string): Observable<Construct> {
    throw new Error("Method not implemented.");
  }
  readAll(): Observable<Construct[]> {
    throw new Error("Method not implemented.");
  }
  create(unit: Construct): Observable<Construct> {
    throw new Error("Method not implemented.");
  }
  read(id: string): Observable<Construct> {
    throw new Error("Method not implemented.");
  }
  update(unit: Construct): Observable<Construct> {
    throw new Error("Method not implemented.");
  }
  delete(id: string): Observable<Construct> {
    throw new Error("Method not implemented.");
  }

}
