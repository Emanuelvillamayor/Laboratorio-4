import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdivinamonedaComponent } from './adivinamoneda.component';

describe('AdivinamonedaComponent', () => {
  let component: AdivinamonedaComponent;
  let fixture: ComponentFixture<AdivinamonedaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdivinamonedaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdivinamonedaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
