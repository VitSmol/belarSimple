import { Component, OnInit } from '@angular/core';
import { OrgsService } from 'src/app/services/orgs.service';
import { Org } from '../../../dao/interfaces/interfaces';

@Component({
  selector: 'app-products-by-technics',
  templateUrl: './products-by-technics.component.html',
  styleUrls: ['./products-by-technics.component.sass']
})
export class ProductsByTechnicsComponent implements OnInit {

  public orgs: Org[] = []

  constructor(
    private serv: OrgsService
  ) {

  }
  ngOnInit(): void {
    this.serv.getAll().subscribe(data => {
      this.orgs = data
    })
  }
}
