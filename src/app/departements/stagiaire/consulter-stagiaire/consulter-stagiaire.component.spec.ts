import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulterStagiaireComponent } from './consulter-stagiaire.component';

describe('ConsulterStagiaireComponent', () => {
  let component: ConsulterStagiaireComponent;
  let fixture: ComponentFixture<ConsulterStagiaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsulterStagiaireComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsulterStagiaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
