import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeFormationComponent } from './home-formation.component';

describe('HomeFormationComponent', () => {
  let component: HomeFormationComponent;
  let fixture: ComponentFixture<HomeFormationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeFormationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
