import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarSemestreComponent } from './editar-semestre.component';

describe('EditarSemestreComponent', () => {
  let component: EditarSemestreComponent;
  let fixture: ComponentFixture<EditarSemestreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarSemestreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarSemestreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
