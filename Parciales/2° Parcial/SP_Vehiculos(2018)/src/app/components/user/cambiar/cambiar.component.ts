import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cambiar',
  templateUrl: './cambiar.component.html',
  styleUrls: ['./cambiar.component.css']
})
export class CambiarComponent implements OnInit {
  constructor(private router:Router) { }

  ngOnInit() {
    localStorage.setItem("Token","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YmY1YjUyMTFiMTgzNDA2MTRhY2FlMWEiLCJub21icmUiOiJNYXJtYXIiLCJ1c2VyIjoibWFyY29zQGdtYWlsLmFyIiwicGFzcyI6IjEyMzQiLCJ0aXBvIjoiQ2xpZW50ZSIsImlwIjoiOjoxIiwiaWF0IjoxNTQyODI5NDY2fQ.AyLLbW_82tecgtzL-QvogkA0cGS5MnuU4X5jZ9bhTIY");
    this.router.navigate(["/cargar"]);

  }

}
