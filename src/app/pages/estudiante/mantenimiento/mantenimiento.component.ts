import { Component, ViewChild } from '@angular/core';
import { EstudianteImple } from '../../../models/estudiante.model';
import { RepresentanteImple } from '../../../models/representante.model';
import { EstudianteDataComponent } from '../estudiante-data/estudiante-data.component';
import { PresentanteDataComponent } from '../presentante-data/presentante-data.component';
import { CalificacionDataComponent } from '../calificacion-data/calificacion-data.component';
import { CalificacionImple } from '../../../models/calificacion.model';

@Component({
  selector: 'app-mantenimiento',
  templateUrl: './mantenimiento.component.html',
  styleUrl: './mantenimiento.component.css'
})
export class MantenimientoComponent {
  @ViewChild(EstudianteDataComponent) estudianteComponent!:EstudianteDataComponent;
  @ViewChild(PresentanteDataComponent) representanteComponent!:PresentanteDataComponent;
  @ViewChild(CalificacionDataComponent) calificacionComponent!:CalificacionDataComponent;
  estudiante:EstudianteImple=new EstudianteImple();
  representante:RepresentanteImple=new RepresentanteImple();
  calificacion:CalificacionImple[]=[];
  guardar(){
    this.estudianteComponent.guardar();
    this.representanteComponent.guardar();
    this.calificacionComponent.emiterEvent();
    if(this.estudiante.nombres){
      console.log(this.estudiante)
      console.log(this.representante)
      console.log(this.calificacion)
    }
  }
}
