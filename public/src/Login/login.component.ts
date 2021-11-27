import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';
import { SearchComponent } from './user-authen';

@Component({
    selector: 'my-login',
    templateUrl: 'js/app/components/login/login.component.html'
})

export class LoginComponent implements OnInit {
    constructor(
        private _router: Router
    OnInit(){

    }
}