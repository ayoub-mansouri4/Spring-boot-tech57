import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeStagiaireComponent } from './home-stagiaire.component';

describe('HomeStagiaireComponent', () => {
  let component: HomeStagiaireComponent;
  let fixture: ComponentFixture<HomeStagiaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeStagiaireComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeStagiaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
