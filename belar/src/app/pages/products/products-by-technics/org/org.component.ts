import { Component, Input } from '@angular/core';
import { Org } from 'src/app/dao/interfaces/interfaces';
import { MatExpansionPanel } from '@angular/material/expansion';
import { MatTableDataSource } from '@angular/material/table';
import { MatFormFieldControl } from '@angular/material/form-field';


@Component({
  selector: 'app-org',
  templateUrl: './org.component.html',
  styleUrl: './org.component.sass'
})
export class OrgComponent {
  public org!: Org
  dataSource!: MatTableDataSource<any>
  input!: MatFormFieldControl<any>

  displayedColumns = [
    'position', 'applicability', 'placeLocal', 'cylName', 'count'
  ]

  @Input('org') public set setOrgs(org: Org) {
    this.org = org;
    this.dataSource = new MatTableDataSource(this.org.data);
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
