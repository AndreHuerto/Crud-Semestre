import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarSemestreComponent } from './listar-semestre.component';

describe('ListarSemestreComponent', () => {
  let component: ListarSemestreComponent;
  let fixture: ComponentFixture<ListarSemestreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarSemestreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarSemestreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
