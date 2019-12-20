import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeladosComponent } from './helados.component';

describe('HeladosComponent', () => {
  let component: HeladosComponent;
  let fixture: ComponentFixture<HeladosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeladosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeladosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
