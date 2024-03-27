import { NgModule } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { AboutComponent } from './pages/about/about.component';
import { CertsComponent } from './pages/certs/certs.component';
import { LoginComponent } from './pages/login/login.component';
import { ProductsComponent } from './pages/products/products.component';
import { HashLocationStrategy, LocationStrategy, NgOptimizedImage, PathLocationStrategy } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ProductsListComponent } from './pages/products/products-list/products-list.component';
import { ProductsConstructorComponent } from './pages/products/products-constructor/products-constructor.component';
import { ProductsByTechnicsComponent } from './pages/products/products-by-technics/products-by-technics.component';
import { ProductsListFilterComponent } from './pages/products/products-list/products-list-filter/products-list-filter.component';
import { ProductsListAllComponent } from './pages/products/products-list/products-list-all/products-list-all.component';
import { MatPaginatorIntl, MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatChipsModule } from '@angular/material/chips';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { getRUPaginatorIntl } from 'src/paginator-ru';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { OrgComponent } from "./pages/products/products-by-technics/org/org.component";
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { MAT_RADIO_DEFAULT_OPTIONS, MatRadioModule } from '@angular/material/radio';
import { TopComponent } from "./pages/products/products-constructor/top/top.component";
import { SideComponent } from './pages/products/products-constructor/side/side.component';
import { BottomComponent } from './pages/products/products-constructor/bottom/bottom.component';
import { MiddleComponent } from './pages/products/products-constructor/middle/middle.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { ScaleDirective } from './directives/scale.directive';
import {MAT_DIALOG_DATA, MatDialogModule} from '@angular/material/dialog';
import { CartComponent } from './pages/cart/cart.component';
import { CartDialogComponent } from './shared/cart-dialog/cart-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    CertsComponent,
    LoginComponent,
    ProductsComponent,
    ProductsListComponent,
    ProductsConstructorComponent,
    ProductsByTechnicsComponent,
    ProductsListFilterComponent,
    ProductsListAllComponent,
    OrgComponent,
    TopComponent,
    SideComponent,
    BottomComponent,
    MiddleComponent,
    CartComponent,
    CartDialogComponent
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    { provide: MatPaginatorIntl, useValue: getRUPaginatorIntl() },
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { subscriptSizing: 'dynamic', appearance: 'fill' } },
    // { provide: MAT_RADIO_DEFAULT_OPTIONS, useValue: { color: 'primary' }, }
  ],
  bootstrap: [AppComponent],
  imports: [
    FormsModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    MatPaginatorModule,
    MatButtonModule,
    MatSelectModule,
    MatChipsModule,
    MatFormFieldModule,
    MatIconModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatExpansionModule,
    CdkAccordionModule,
    MatTableModule,
    MatInputModule,
    MatRadioModule,
    NgOptimizedImage,
    DragDropModule,
    ScaleDirective,
    MatDialogModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
