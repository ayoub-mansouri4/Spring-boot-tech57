import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterFormateurComponent } from './ajouter-formateur.component';

describe('AjouterFormateurComponent', () => {
  let component: AjouterFormateurComponent;
  let fixture: ComponentFixture<AjouterFormateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterFormateurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouterFormateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
