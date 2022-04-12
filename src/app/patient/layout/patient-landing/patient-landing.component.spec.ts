import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientLandingComponent } from './patient-landing.component';

describe('PatientLandingComponent', () => {
  let component: PatientLandingComponent;
  let fixture: ComponentFixture<PatientLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientLandingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
