import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../servicios/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public authService: AuthService, public router: Router) { }

  ngOnInit() {

  }

  desloguarse() {
    this.router.navigate(['/inicio']);
    this.authService.desloguearse().then(res => {
       console.log(res);
       
    }).catch(err => console.log(err));
  }


}
