import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtenderTurnosComponent } from './atender-turnos.component';

describe('AtenderTurnosComponent', () => {
  let component: AtenderTurnosComponent;
  let fixture: ComponentFixture<AtenderTurnosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtenderTurnosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtenderTurnosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
