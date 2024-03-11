import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Construct } from 'src/app/dao/interfaces/interfaces';
import { ConstructorService } from 'src/app/services/constructor.service';

@Component({
  selector: 'app-products-constructor',
  templateUrl: './products-constructor.component.html',
  styleUrls: ['./products-constructor.component.sass']
})
export class ProductsConstructorComponent implements OnInit, AfterViewInit {

  public construct?: Construct

  constructor(
    private serv: ConstructorService
  ){}

  ngAfterViewInit(): void {
  }

  ngOnInit(): void {
    this.serv.getAll().subscribe(data => {
      this.construct = data
      console.log(this.construct);

    })
  }


}
