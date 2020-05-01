import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Selectorclase2Component } from './selectorclase2.component';

describe('Selectorclase2Component', () => {
  let component: Selectorclase2Component;
  let fixture: ComponentFixture<Selectorclase2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Selectorclase2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Selectorclase2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
