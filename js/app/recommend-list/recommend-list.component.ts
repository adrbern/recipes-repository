import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';
import { SearchComponent } from './search/search.component';
import { HeaderPageComponent } from './header-page/header-page';


@Component({
    selector: 'my-recommend-list',
    templateUrl: './recommend-list/recommend-list.component.html'
})

export class RecommendListComponent implements OnInit {
    recommend: RecommendReceipt[];
    selected_receipt: RecommendReceipt;

    constructor(
        private _router: Router,
        private _recommendReceiptService: RecommendReceiptService) { }

    ngOnInit() {
        this.getRecommendReceipts();
    }

    getRecommendReceipts() {
        this._recommendReceiptService.getRecommendReceipts().then(recommend => this.recommend = recommend);
    }

    onSelectReceipt(receipt: RecommendReceipt) { this.selected_receipt = receipt; }

    gotoDetailReceipt() {
        this._router.navigate(['ReceiptDetail', { id: this.selected_receipt.id }]);
    }
}