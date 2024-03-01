import { Component } from '@angular/core';

@Component({
  selector: 'app-certs',
  templateUrl: './certs.component.html',
  styleUrls: ['./certs.component.sass']
})
export class CertsComponent {
  certsArray = [
    {
      src: 'assets/img/certs/cert-1.png',
      title: 'Сертификат продукции собственного производства',
      alt: 'Сертификат продукции собственного производства'
    },
    {
      src: 'assets/img/certs/cert-2.jpg',
      title: 'Сертификат соответствия евразийского экономического союза',
      alt: 'Сертификат RY C-BY.АД07.В.06024_23_page-0001'
    },
    {
      src: 'assets/img/certs/cert-4.jpg',
      title: 'Приложение к сертификату соответствия евразийского экономического союза',
      alt: 'RY-C-BY.АД07.В.06024'
    },
    {
      src: 'assets/img/certs/cert-3.jpg',
      title: 'Сертификат ТМ Белар',
      alt: 'Сертификат ТМ Белар'
    },
  ]
}
