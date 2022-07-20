import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListerAbsenceComponent } from './lister-absence.component';

describe('ListerAbsenceComponent', () => {
  let component: ListerAbsenceComponent;
  let fixture: ComponentFixture<ListerAbsenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListerAbsenceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListerAbsenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
