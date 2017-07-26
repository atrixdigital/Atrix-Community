import { Component, OnInit } from '@angular/core';
import { AuthService } from './../auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit() {
  }
  // data =[{
  // 	firstName:'ali',
  // 	lastName:'Khan',
  // 	position:'Front-end Developer',
  // 	city:'Gujranwala',
  // 	bio:'Development is passion'
  // },
  // {
  // 	firstName:'ali',
  // 	lastName:'Khan',
  // 	position:'Front-end Developer',
  // 	city:'Gujranwala',
  // 	bio:'Development is passion'
  // },{
  // 	firstName:'ali',
  // 	lastName:'Khan',
  // 	position:'Front-end Developer',
  // 	city:'Gujranwala',
  // 	bio:'Development is passion'
  // },{
  // 	firstName:'ali',
  // 	lastName:'Khan',
  // 	position:'Front-end Developer',
  // 	city:'Gujranwala',
  // 	bio:'Development is passion'
  // }]
}
