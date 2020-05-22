import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearSalasComponent } from './crear-salas.component';

describe('CrearSalasComponent', () => {
  let component: CrearSalasComponent;
  let fixture: ComponentFixture<CrearSalasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearSalasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearSalasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
