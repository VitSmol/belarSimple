import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-side',
  templateUrl: './side.component.html',
  styleUrl: './side.component.sass'
})
export class SideComponent {
  public item: any

  @Input('constructItem') public set setProducts(constructItem: any) {
    setTimeout(() => {
      this.item = constructItem
      console.log(this.item);

      // this.query = query
      // this.intersectPistonDiameters = this.intersection(this.query.pa_diamp, this.searchPistonDiameters)
      // this.intersectStockDiameters = this.intersection(this.query.pa_diamsh, this.searchStockDiameters)
      // this.intersectPistonStroke = this.intersection(this.query.pa_hod, this.searchPistonStroke)
      // console.log(this.query.pa_hod);

    }, 200);
  }
}
