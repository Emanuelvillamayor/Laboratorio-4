import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cambiar-admin',
  templateUrl: './cambiar-admin.component.html',
  styleUrls: ['./cambiar-admin.component.css']
})
export class CambiarAdminComponent implements OnInit {

  constructor(private router:Router) { }


  ngOnInit() {
    localStorage.setItem("Token","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YmY2MGMzM2E0YThkNTE2ZjgxZWIyYzAiLCJub21icmUiOiJNYXJjb3MiLCJ1c2VyIjoibWFyY29zQGdtYWlsLmNvbSIsInBhc3MiOiIxMjM0IiwidGlwbyI6IkFkbWluIiwiaXAiOiI6OjEiLCJpYXQiOjE1NDI4NTE2NjN9.0d9--W7HqKgprSO2a5ITvBweZcmYOnjDISglVrOU3jg");
    
    this.router.navigate(["/cargar"]);

  }

}
