import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TraerUnHeladoComponent } from './traer-un-helado.component';

describe('TraerUnHeladoComponent', () => {
  let component: TraerUnHeladoComponent;
  let fixture: ComponentFixture<TraerUnHeladoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TraerUnHeladoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TraerUnHeladoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
