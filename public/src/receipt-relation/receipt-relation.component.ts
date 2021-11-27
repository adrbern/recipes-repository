import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';

@Component({
    selector: 'my-receipt-relation',
    templateUrl: 'js/app/components/receipt-relation/receipt-relation.component.html'
})

export class ReceiptRelationComponent implements OnInit {

    constructor(
        private _router: Router

    ngOnInit() {

    }

    gotoDetail() {
        this._router.navigate(['ReceiptDetail', {}]);
    }
}