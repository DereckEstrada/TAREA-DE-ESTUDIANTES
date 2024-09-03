import { NgModule, Pipe } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstudianteDataComponent } from './estudiante-data/estudiante-data.component';
import { PresentanteDataComponent } from './presentante-data/presentante-data.component';
import { CalificacionDataComponent } from './calificacion-data/calificacion-data.component';
import { MantenimientoComponent } from './mantenimiento/mantenimiento.component';
import { CrearCalificacionComponent } from './crear-calificacion/crear-calificacion.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NotaPipe } from './pipes/nota.pipe';



@NgModule({
  declarations: [
    EstudianteDataComponent,
    PresentanteDataComponent,
    CalificacionDataComponent,
    MantenimientoComponent,
    CrearCalificacionComponent,
    NotaPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers:[

    NotaPipe
  ],
  exports:[
    EstudianteDataComponent,
    PresentanteDataComponent,
    CalificacionDataComponent,
    MantenimientoComponent
  ]
})
export class EstudianteModule { }
