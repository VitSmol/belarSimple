import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConstructDAOArray } from '../dao/implements/ConstructDAOArray';
import { Observable } from 'rxjs';
import { Construct } from '../dao/interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ConstructorService {

  constructor(
    private http: HttpClient
  ) { }

  private ConstructorDAO = new ConstructDAOArray(this.http)

  getAll(): Observable<Construct> {
    return this.ConstructorDAO.getAll();
  }
}
