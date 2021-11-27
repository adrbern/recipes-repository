import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';

@Component({
    selector: 'my-time-order',
    templateUrl: 'js/app/components/time-order/time-order.component.html'
})

export class TimeOrderComponent implements OnInit {

    constructor(
        private _router: Router

    ngOnInit() {

    }

    filterAscendent() {
        //filter de angular
    }

    filterDescendent() {
        //filter de angular
    }
}