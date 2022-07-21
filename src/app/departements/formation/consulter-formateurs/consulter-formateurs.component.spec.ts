import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulterFormateursComponent } from './consulter-formateurs.component';

describe('ConsulterFormateursComponent', () => {
  let component: ConsulterFormateursComponent;
  let fixture: ComponentFixture<ConsulterFormateursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsulterFormateursComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsulterFormateursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
