import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearCalificacionComponent } from './crear-calificacion.component';

describe('CrearCalificacionComponent', () => {
  let component: CrearCalificacionComponent;
  let fixture: ComponentFixture<CrearCalificacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CrearCalificacionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CrearCalificacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
