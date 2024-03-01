import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import exportFromJSON from 'export-from-json';
import { Product } from 'src/app/dao/interfaces/interfaces';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.sass']
})
export class ProductsComponent {

}
