import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CambiarAdminComponent } from './cambiar-admin.component';

describe('CambiarAdminComponent', () => {
  let component: CambiarAdminComponent;
  let fixture: ComponentFixture<CambiarAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CambiarAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CambiarAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
