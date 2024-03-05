import { Observable } from "rxjs";
import { OrgsDAO } from "../interfaces/OrgsDAO";
import { Org } from "../interfaces/interfaces";
import { HttpClient } from "@angular/common/http";

export class OrgsDAOArray implements OrgsDAO {
  url: string = "assets/data/orgs.json";
constructor(
  private http: HttpClient
){}

  readAll(): Observable<Org[]> {
    return this.http.get<Org[]>(this.url)
  }
  create(unit: Org): Observable<Org> {
    throw new Error("Method not implemented.");
  }
  read(id: string): Observable<Org> {
    throw new Error("Method not implemented.");
  }
  update(unit: Org): Observable<Org> {
    throw new Error("Method not implemented.");
  }
  delete(id: string): Observable<Org> {
    throw new Error("Method not implemented.");
  }

}
