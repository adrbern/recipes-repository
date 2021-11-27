import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';

@Component({
    selector: 'my-search',
    templateUrl: './search/search.component.html'
})

export class SearchComponent implements OnInit {
    selectedAdvanceSearch: Boolean;

    constructor(
        private _router: Router
    //private _heroService: HeroService) { }
    OnInit(){
        this.selectedAdvanceSearch = false;
    }
    Submit() {
        //this._router.navigate(['Login', {}]);
    }
    AdvanceSubmit() {
        //this._router.navigate(['Home', {}]);
    }
}