import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';

import { Receipt } from '../reecipt/receipt';
import { ReceiptService } from './receipt.service';

@Component({
    selector: 'my-receipt',
    templateUrl: 'js/app/components/receipt/receipt.component.html'
    inputs: ['receipt']
})
export class ReceiptComponent implements OnInit {

    constructor(
        private _router: Router,
        private _receiptService: ReceiptService) { }

    ngOnInit() {
        let id = +this._routeParams.get('id');
        this._receiptService.findReceipt(id);
    }
}

/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */