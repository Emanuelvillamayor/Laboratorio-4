import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrarBotonComponent } from './borrar-boton.component';

describe('BorrarBotonComponent', () => {
  let component: BorrarBotonComponent;
  let fixture: ComponentFixture<BorrarBotonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BorrarBotonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrarBotonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
