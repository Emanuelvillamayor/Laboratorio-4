import { Registro } from 'src/app/Common/Registro';
import { FormBuilder, Validators } from '@angular/forms';
import { ZapatoService } from './../../../../Services/zapato.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro-cliente',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class Registro2Component extends Registro implements OnInit {
  private file: string;
  constructor(private fb: FormBuilder, private zapatoService: ZapatoService) {
    super();
    this.file = '';
    this.resetForm();
  }

  resetForm() {
    this.form = this.fb.group({
      codigo: ['', Validators.required],
      name: ['', Validators.required],
      precio: [0, Validators.required],
      local: ['1'],
      genero: ['Hombre'],
      foto: []
    });


  }

  ngOnInit() {
  }

  onFileChange(event) {
    const reader = new FileReader();
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.file = reader.result.toString();
      };
    }
  }

  public Submit(): void {
    this.errorMessage = '';
    this.error = false;
    this.success = false;
    if (this.form.valid) {
      const codigo = this.form.get('codigo').value;
      const name = this.form.get('name').value;
      const local = this.form.get('local').value;
      const precio = this.form.get('precio').value;
      const genero = this.form.get('genero').value;

      console.log(this.file);
      this.zapatoService.Registrar(codigo, local, name, precio, genero, new Date(Date.now()), this.file)
        .then(
          response => {
            if (response['Estado'] === 'OK') {
              this.success = true;
              this.resetForm();
              // this.form.get('tipo').setValue('Socio');
              // this.captcha.reloadCaptcha();
              // this.captcha.resetCaptcha();
              this.registradoCorrectamente.emit();
            } else {
              this.error = true;
              this.errorMessage = response['Mensaje'];
            }
          }
        )
        .catch(
          error => {
            this.error = true;
            this.errorMessage = error['Mensaje'];
          }
        );
    } else {
      this.errorMessage = 'Debe completar los campos correctamente.';
      this.error = true;
   }
  }

}
