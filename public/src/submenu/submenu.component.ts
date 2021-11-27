import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';
import { SubmenuComponent } from './submenu.component';

@Component({
    selector: 'my-submenu',
    templateUrl: 'js/app/components/submenu/submenu.component.html'
})

export class SubmenuComponent implements OnInit {

    constructor(
        private _router: Router
    OnInit(){
    }

    gotoNovedad() {
        this._router.navigate(['Novedad', {}]);
    }

    gotoRecommend() {
        this._router.navigate(['Recommend', {}]);
    }

    gotoTendencia() {
        this._router.navigate(['Tendencia', {}]);
    }
}