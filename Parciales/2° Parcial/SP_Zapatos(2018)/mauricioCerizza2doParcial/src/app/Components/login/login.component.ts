import { Router } from '@angular/router';
import { AuthService } from './../../Services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public form: FormGroup;
  public error: boolean;
  public errorMessage: string;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.form = this.fb.group({
      user: ['', Validators.required],
      name: ['', Validators.required],
      pass: ['', Validators.required],
      perfil: ['Cliente', Validators.required]
    });
  }

  ngOnInit() {
    this.router.navigate(['/']);
  }

  CargarDefault(tipo: string) {
    let dataLogin: Object = null;
    switch (tipo) {
      case 'F':
        dataLogin = {
          user: 'octavio@gmail.com',
          pass: 'Octavio',
          name: 'Octavio',
          perfil: 'Cliente'
        };
        this.form.setValue(dataLogin);
        break;
      case 'N':
        dataLogin = {
          user: 'matias@gmail.com',
          pass: 'Matias',
          name: 'Matias',
          perfil: 'Vendedor'
        };
        this.form.setValue(dataLogin);
        break;
      case 'P':
        dataLogin = {
          user: 'luciana@gmail.com',
          pass: 'Luciana',
          name: 'Luciana',
          perfil: 'Administrador'
        };
        this.form.setValue(dataLogin);
        break;
    }
  }

  public Submit(): void {
    this.errorMessage = '';
    this.error = false;
    if (this.form.valid) {
      const mail: string = this.form.get('user').value;
      const pass: string = this.form.get('pass').value;
      const name: string = this.form.get('name').value;
      const perfil: string = this.form.get('perfil').value;

      this.authService.loguear(mail, name, pass, perfil)
        .then(
          response => {
            console.log(response);
              this.error = true;
              this.errorMessage = response['Mensaje'];
          }
        )
        .catch(
          response => {
            this.error = true;
            this.errorMessage = response['Mensaje'];
          }
        );
    } else {
      this.errorMessage = 'Debe completar los campos correctamente.';
      this.error = true;
    }
  }

}
