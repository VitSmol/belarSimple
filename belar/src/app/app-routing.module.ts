import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { CertsComponent } from './pages/certs/certs.component';
import { LoginComponent } from './pages/login/login.component';
import { ProductsComponent } from './pages/products/products.component';
import { HeaderComponent } from './shared/header/header.component';
import { ProductsListComponent } from './pages/products/products-list/products-list.component';
import { ProductsByTechnicsComponent } from './pages/products/products-by-technics/products-by-technics.component';
import { ProductsConstructorComponent } from './pages/products/products-constructor/products-constructor.component';

const routes: Routes = [
  {
    path: '', component: HeaderComponent, children: [
      // { path: '', redirectTo: '/', pathMatch: 'full' },
      { path: '', component: AboutComponent },
      { path: 'cert', component: CertsComponent },
      { path: 'login', component: LoginComponent },
      { path: 'products', component: ProductsComponent, children: [
        {
          path: '', redirectTo: '/products/list', pathMatch: 'full'},
        {
          path: 'list', component: ProductsListComponent
        },
        {
          path: 'technick', component: ProductsByTechnicsComponent
        },
        {
          path: 'constructor', component: ProductsConstructorComponent
        }
      ]},
    ]
  },

]
@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'top',anchorScrolling: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
