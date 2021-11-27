import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';

@Component({
    selector: 'my-time-order',
    templateUrl: 'js/app/components/class-receipt/class-receipt.component.html'
})

export class TimeOrderComponent implements OnInit {

    constructor(
        private _router: Router

    ngOnInit() {

    }

    filterType1() {
        //filter de angular
    }

    filterType2() {
        //filter de angular
    }
}