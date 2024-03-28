import { Component } from '@angular/core';

@Component({
  selector: 'app-company',
  standalone: true,
  imports: [],
  templateUrl: './company.component.html',
  styleUrl: './company.component.sass'
})
export class CompanyComponent {
public imgArray = [
  {
    pathMini: 'assets/img/1.jpg',
    pathFull: 'assets/img/1sc.jpg',
},
  {
    pathMini: 'assets/img/2.jpg',
    pathFull: 'assets/img/2sc.jpg',
},
  {
    pathMini: 'assets/img/3.jpg',
    pathFull: 'assets/img/3sc.jpg',
},
  {
    pathMini: 'assets/img/4.jpg',
    pathFull: 'assets/img/4sc.jpg',
},
  {
    pathMini: 'assets/img/5.jpg',
    pathFull: 'assets/img/5sc.jpg',
},
  {
    pathMini: 'assets/img/6.jpg',
    pathFull: 'assets/img/6sc.jpg',
},
  {
    pathMini: 'assets/img/7.jpg',
    pathFull: 'assets/img/7sc.jpg',
},
  {
    pathMini: 'assets/img/8.jpg',
    pathFull: 'assets/img/8sc.jpg',
},
];

showSwipe(img: {pathMini: string, pathFull: string}) {

}
}
