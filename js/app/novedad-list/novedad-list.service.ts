import { Receipt } from '../receipt/receipt';
import { RECEIPTS_RECOMMEND } from './mock-receipt';
import { Injectable } from 'angular2/core';
import { NovedadReceiptService } from './receipt-list.service';

@Injectable()
export class NovedadListService {
    getReceipts() {
        return Promise.resolve(RECEIPTS);
    }

    // See the "Take it slow" appendix
    getReceiptSlowly() {
        return new Promise<Receipt[]>(resolve =>
                setTimeout(()=>resolve(RECEIPTS), 2000) // 2 seconds
        );
    }

    findReceipt(id: number) {
        return Promise.resolve(RECEIPTS).then(
            recommend => recommend.filter(recommend => recommend.id === id)[0]
        );
    }
}
