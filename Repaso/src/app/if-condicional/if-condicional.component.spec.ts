import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IfCondicionalComponent } from './if-condicional.component';

describe('IfCondicionalComponent', () => {
  let component: IfCondicionalComponent;
  let fixture: ComponentFixture<IfCondicionalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IfCondicionalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IfCondicionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
