import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsConstructorComponent } from './products-constructor.component';

describe('ProductsConstructorComponent', () => {
  let component: ProductsConstructorComponent;
  let fixture: ComponentFixture<ProductsConstructorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsConstructorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsConstructorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
