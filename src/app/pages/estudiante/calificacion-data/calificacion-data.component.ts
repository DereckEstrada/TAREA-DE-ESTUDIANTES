import { Component, EventEmitter, Output } from '@angular/core';
import { CalificacionImple } from '../../../models/calificacion.model';
import { NotaPipe } from '../pipes/nota.pipe';
@Component({
  selector: 'app-calificacion-data',
  templateUrl: './calificacion-data.component.html',
  styleUrl: './calificacion-data.component.css'
})
export class CalificacionDataComponent {
  @Output() emiter=new EventEmitter<CalificacionImple[]>();
  califacion:CalificacionImple[]=[]
  guardar(nota:CalificacionImple){
    nota.id=this.califacion.length+1
    this.califacion.push(nota);
  }
  emiterEvent(){
    this.emiter.emit(this.califacion);
  }
}
