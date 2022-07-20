import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffecterEncadrantComponent } from './affecter-encadrant.component';

describe('AffecterEncadrantComponent', () => {
  let component: AffecterEncadrantComponent;
  let fixture: ComponentFixture<AffecterEncadrantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffecterEncadrantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AffecterEncadrantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
