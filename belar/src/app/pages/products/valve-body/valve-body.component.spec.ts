import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValveBodyComponent } from './valve-body.component';

describe('ValveBodyComponent', () => {
  let component: ValveBodyComponent;
  let fixture: ComponentFixture<ValveBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValveBodyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ValveBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
