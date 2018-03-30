import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  loginUser(event) {
    event.preventDefault();
    let username = event.target.querySelector('#username').value;
    let password = event.target.querySelector('#password').value;

  }

  ngOnInit() {
  }

}
