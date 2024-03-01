import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsByTechnicsComponent } from './products-by-technics.component';

describe('ProductsByTechnicsComponent', () => {
  let component: ProductsByTechnicsComponent;
  let fixture: ComponentFixture<ProductsByTechnicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsByTechnicsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsByTechnicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
