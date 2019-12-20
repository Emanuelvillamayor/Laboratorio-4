import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltrarGrillaComponent } from './filtrar-grilla.component';

describe('FiltrarGrillaComponent', () => {
  let component: FiltrarGrillaComponent;
  let fixture: ComponentFixture<FiltrarGrillaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiltrarGrillaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltrarGrillaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
