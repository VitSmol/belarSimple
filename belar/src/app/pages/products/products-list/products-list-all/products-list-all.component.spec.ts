import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsListAllComponent } from './products-list-all.component';

describe('ProductsListAllComponent', () => {
  let component: ProductsListAllComponent;
  let fixture: ComponentFixture<ProductsListAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsListAllComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsListAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
