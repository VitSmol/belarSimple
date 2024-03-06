import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Org, Product } from 'src/app/dao/interfaces/interfaces';
import { MatExpansionPanel } from '@angular/material/expansion';
import { MatTableDataSource } from '@angular/material/table';
import { MatFormFieldControl } from '@angular/material/form-field';
import { DataService } from 'src/app/services/data.service';
import { filter } from 'rxjs';


@Component({
  selector: 'app-org',
  templateUrl: './org.component.html',
  styleUrl: './org.component.sass'
})
export class OrgComponent implements OnInit {
  public org!: Org
  public itemToCart!: Product
  public imgSrc: string = ''
  public width: number = 0
  dataSource!: MatTableDataSource<any>
  input!: MatFormFieldControl<any>

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
      this.width = event.target.innerWidth;
  }
  constructor(
    private serv: DataService
  ) { }

  ngOnInit(): void {
    this.width = window.innerWidth;
  }



  displayedColumns = [
    'position', 'applicability', 'placeLocal', 'cylName', 'count', 'action'
  ]


  @Input('org') public set setOrgs(org: Org) {
    this.org = org;
    this.dataSource = new MatTableDataSource(this.org.data);
    this.imgSrc = `assets/img/orgs/${this.org.img}.png`

  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  addToCart(item: any) {

    console.log(item);
    this.serv.getAll().subscribe(data => {
      const result = data.filter(el => el.title === item.cylName)
      console.log(result);
    })
  }
}
