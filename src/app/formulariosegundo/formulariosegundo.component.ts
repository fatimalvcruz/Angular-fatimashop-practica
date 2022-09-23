import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { ValidateUrl } from '../Validators/url.validators';

@Component({
  selector: 'app-formulariosegundo',
  templateUrl: './formulariosegundo.component.html',
  styleUrls: ['./formulariosegundo.component.css']
})
export class FormulariosegundoComponent implements OnInit {

  formulario: FormGroup;
  miPattern = '[a-zA-Z ]*';

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2), Validators.pattern(this.miPattern)]],
      surname: ['', Validators.required],
      email:['', [Validators.required, ValidateUrl]]
    });
 
  }
  onSubmit(_datosForm) {
    console.log(_datosForm.value);
  }
 

}
