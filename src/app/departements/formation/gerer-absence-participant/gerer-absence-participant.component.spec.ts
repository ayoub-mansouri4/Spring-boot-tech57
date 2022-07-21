import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GererAbsenceParticipantComponent } from './gerer-absence-participant.component';

describe('GererAbsenceParticipantComponent', () => {
  let component: GererAbsenceParticipantComponent;
  let fixture: ComponentFixture<GererAbsenceParticipantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GererAbsenceParticipantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GererAbsenceParticipantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
