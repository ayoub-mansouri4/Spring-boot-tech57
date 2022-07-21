import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulterParticipantsComponent } from './consulter-participants.component';

describe('ConsulterParticipantsComponent', () => {
  let component: ConsulterParticipantsComponent;
  let fixture: ComponentFixture<ConsulterParticipantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsulterParticipantsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsulterParticipantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
