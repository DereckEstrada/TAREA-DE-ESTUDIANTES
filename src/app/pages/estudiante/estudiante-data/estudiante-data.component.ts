import { Component, EventEmitter, inject, Output } from '@angular/core';
import { EstudianteImple } from '../../../models/estudiante.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-estudiante-data',
  templateUrl: './estudiante-data.component.html',
  styleUrl: './estudiante-data.component.css'
})
export class EstudianteDataComponent {
  @Output()emitter=new EventEmitter<EstudianteImple>();
  private _formBuilder=inject(FormBuilder);
  form!:FormGroup;
  estudiante:EstudianteImple=new EstudianteImple();
  constructor(){
    this.initForm();
  }
  initForm(){
    this.form=this._formBuilder.group({
      identificacion:['', [Validators.required, Validators.minLength(10)]],
      nombre:['', [Validators.required, Validators.minLength(5) ]],
      apellido:['', [Validators.required, Validators.minLength(5) ]],
      fechaNacimiento:['', [Validators.required, ]],
      curso:['', [Validators.required, Validators.minLength(2) ]],
    })
  }
  getInvalidArgument(argument:string){
    return this.form.get(argument)?.invalid && this.form.get(argument)?.touched;
  }
  guardar(){
    if(this.form.invalid){
      Object.values(this.form.controls).forEach(controls=>{
        controls.markAsTouched();
      })
      return;
    }
    this.emitter.emit(this.estudiante);    
  }
}
