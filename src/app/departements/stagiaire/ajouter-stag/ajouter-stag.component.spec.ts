import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterStagComponent } from './ajouter-stag.component';

describe('AjouterStagComponent', () => {
  let component: AjouterStagComponent;
  let fixture: ComponentFixture<AjouterStagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterStagComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouterStagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
