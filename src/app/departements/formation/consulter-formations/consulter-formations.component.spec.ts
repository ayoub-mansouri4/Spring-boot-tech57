import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulterFormationsComponent } from './consulter-formations.component';

describe('ConsulterFormationsComponent', () => {
  let component: ConsulterFormationsComponent;
  let fixture: ComponentFixture<ConsulterFormationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsulterFormationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsulterFormationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
