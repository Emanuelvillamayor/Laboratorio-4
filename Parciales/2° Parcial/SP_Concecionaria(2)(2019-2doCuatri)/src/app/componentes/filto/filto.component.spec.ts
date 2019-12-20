import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltoComponent } from './filto.component';

describe('FiltoComponent', () => {
  let component: FiltoComponent;
  let fixture: ComponentFixture<FiltoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiltoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
