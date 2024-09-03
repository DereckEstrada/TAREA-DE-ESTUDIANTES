import { Component, EventEmitter, Output } from '@angular/core';
import { CalificacionImple } from '../../../models/calificacion.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-crear-calificacion',
  templateUrl: './crear-calificacion.component.html',
  styleUrl: './crear-calificacion.component.css'
})
export class CrearCalificacionComponent {
  @Output()emitirNota=new EventEmitter<CalificacionImple>();
  califcacion:CalificacionImple={
    id:0,
    nombreTarea:'',
    descripcionTarea:'',
    fechaInicio:'',
    fechaFin:'',
    calificacion:0,
    estado:false
  }
  guardar(form:NgForm){
    if(form.invalid){
      Object.values(form.controls).forEach(controls=>
        controls.markAsTouched()
      )
      return;
    }
    if(this.califcacion.calificacion>=7){
      this.califcacion.estado=true
    }
    this.emitirNota.emit(this.califcacion);
    const btnCerrar=document.getElementById('cerrarBtn')
    btnCerrar?.click();
    this.califcacion={
      id:0,
      nombreTarea:'',
      descripcionTarea:'',
      fechaInicio:'',
      fechaFin:'',
      calificacion:0,
      estado:false
    }
    Object.values(form.controls).forEach(control=>control.markAsUntouched());
  }
}
