import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkingFormReactiveComponent } from './parking-form-reactive.component';

describe('ParkingFormReactiveComponent', () => {
  let component: ParkingFormReactiveComponent;
  let fixture: ComponentFixture<ParkingFormReactiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParkingFormReactiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParkingFormReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
