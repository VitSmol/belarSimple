import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OilLineComponent } from './oil-line.component';

describe('OilLineComponent', () => {
  let component: OilLineComponent;
  let fixture: ComponentFixture<OilLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OilLineComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OilLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
