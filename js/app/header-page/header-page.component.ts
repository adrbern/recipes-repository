/*import {Component, Input, Output} from 'angular2/core';
import { Router } from 'angular2/router';
import { SearchComponent } from './search/search.component';*/

import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';
import { SearchComponent } from './search/search.component';

@Component({
    selector: 'my-header-page',
    templateUrl: './header-page/header-page.component.html',
    injectables: [SearchComponent]
    //directives: [SearchComponent]
})

//export class HeaderPageComponent {
export class HeaderPageComponent implements OnInit {
    selectedAdvanceSearch: Boolean;

    constructor(private _router: Router){
        console.log('hola');
    }
    ngOnInit() {
        // Properties are resolved and things like
        // this.mapWindow and this.mapControls
        // had a chance to resolve from the
        // two child components <map-window> and <map-controls>
        console.log('hola2');
    }
    OnInit(){
        this.selectedAdvanceSearch = false;
    }

    gotoLogin() {
        this._router.navigate(['Login', {}]);
    }
    gotoHome() {
        this._router.navigate(['Home', {}]);
    }

    onSelectAdvanceSearch(select: Boolean) { this.selectedAdvanceSearch = select; }

   /* constructor(){
        this.sayMyName()
    }
    sayMyName(){
        console.log('hola')
    }*/
}