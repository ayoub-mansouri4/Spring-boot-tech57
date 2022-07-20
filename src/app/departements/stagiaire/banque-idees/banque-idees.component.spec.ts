import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BanqueIdeesComponent } from './banque-idees.component';

describe('BanqueIdeesComponent', () => {
  let component: BanqueIdeesComponent;
  let fixture: ComponentFixture<BanqueIdeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BanqueIdeesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BanqueIdeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
