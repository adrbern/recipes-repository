import { Receipt } from './receipt';
import { RECEIPTS } from './mock-recommend';
import { Injectable } from 'angular2/core';
import { RecommendReceiptService } from './recommend-receipt.service';

@Injectable()
export class ReceiptService {
     findReceipt(id: number) {
        return Promise.resolve(RECEIPTSD).then(
            recommend => recommend.filter(recommend => recommend.id === id)[0]
        );
    }
}
