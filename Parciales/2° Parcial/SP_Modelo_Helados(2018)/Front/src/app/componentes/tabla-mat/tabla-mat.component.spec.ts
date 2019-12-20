import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaMatComponent } from './tabla-mat.component';

describe('TablaMatComponent', () => {
  let component: TablaMatComponent;
  let fixture: ComponentFixture<TablaMatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablaMatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaMatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
