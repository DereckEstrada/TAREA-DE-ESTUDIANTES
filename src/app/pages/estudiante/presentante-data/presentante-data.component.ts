import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RepresentanteImple } from '../../../models/representante.model';

@Component({
  selector: 'app-presentante-data',
  templateUrl: './presentante-data.component.html',
  styleUrl: './presentante-data.component.css'
})
export class PresentanteDataComponent {
  @Output() emitter=new EventEmitter<RepresentanteImple>();
  private _formBuilder=inject(FormBuilder);
  form!:FormGroup;
  representante:RepresentanteImple=new RepresentanteImple();
  constructor(){
    this.initForm()
  }
  initForm(){
    this.form=this._formBuilder.group({
      nombre:['', [Validators.required, Validators.minLength(5)]],
      apellido:['', [Validators.required, Validators.minLength(5)]],
      relacion:['', [Validators.required]],
      telefono:['', [Validators.required, Validators.minLength(9)]],
      email:['', [Validators.required, Validators.pattern("[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}")]],
    })
  }
  getInvalidArgument(argument:string){
    return this.form.get(argument)?.invalid && this.form.get(argument)?.touched
  }
  guardar(){
    if(this.form.invalid){
      Object.values(this.form.controls).forEach(controls=>{
        controls.markAsTouched();
      })
      return;
    }
    this.emitter.emit(this.representante);
  }
}
