import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OrgsDAOArray } from '../dao/implements/OrgsDAOArray';
import { Observable } from 'rxjs';
import { Org } from '../dao/interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class OrgsService {

  constructor(
    private http: HttpClient
  ) { }

  private OrgsDAO = new OrgsDAOArray(this.http);

  getAll(): Observable<Org[]> {
    return this.OrgsDAO.readAll();
  }
}
