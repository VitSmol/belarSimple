import { AfterViewInit, Component, OnInit } from '@angular/core';
import { DataBase } from 'src/app/data/data';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.sass']
})
export class AboutComponent implements OnInit, AfterViewInit {
  data = DataBase
  series = ['BC', 'MC', ]
  ngAfterViewInit(): void {
    // this.data.map(el => {
    //   el.split('/')
    // })
    // console.log(this.data.map());

  }


  ngOnInit(): void {

  }


}


