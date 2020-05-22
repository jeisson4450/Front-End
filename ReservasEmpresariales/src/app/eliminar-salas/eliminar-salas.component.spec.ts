import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarSalasComponent } from './eliminar-salas.component';

describe('EliminarSalasComponent', () => {
  let component: EliminarSalasComponent;
  let fixture: ComponentFixture<EliminarSalasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EliminarSalasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarSalasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
