/* eslint-disable */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  role: boolean = true;

  ngOnInit(): void {
    if(localStorage.getItem('role') !== "admin"){
      this.role = false;
    }else{
      this.role = true;
    }
  }
}
