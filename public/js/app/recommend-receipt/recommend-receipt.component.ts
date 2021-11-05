import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';

import { Receipt } from '../reecipt/eceipt';
import { RecommendReceiptService } from './recommend-receipt.service';

@Component({
    selector: 'my-recommend-receipt',
    templateUrl: 'js/app/components/recommend-receipt/recommend-receipt.component.html'
    inputs: ['receipt']
})
export class RecommendReceiptComponent implements OnInit {

    constructor(
        private _router: Router,
        private _recommendReceiptService: RecommendReceiptService) { }

    ngOnInit() {
        let id = +this._routeParams.get('id');
        this._recommendReceiptService.findRecommendReceipt(id);
    }

}

/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */