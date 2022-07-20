import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypesSatgiaireComponent } from './types-satgiaire.component';

describe('TypesSatgiaireComponent', () => {
  let component: TypesSatgiaireComponent;
  let fixture: ComponentFixture<TypesSatgiaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypesSatgiaireComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypesSatgiaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
