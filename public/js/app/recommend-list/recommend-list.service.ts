import { Receipt } from '../receipt/receipt';
import { RECEIPTS_RECOMMEND } from './mock-recommend';
import { Injectable } from 'angular2/core';
import { RecommendReceiptService } from './recommend-list.service';

@Injectable()
export class RecommendReceiptService {
    getRecommendReceipts() {
        return Promise.resolve(RECEIPTS_RECOMMEND);
    }

    // See the "Take it slow" appendix
    getRecommendReceiptSlowly() {
        return new Promise<RecommendReceipt[]>(resolve =>
                setTimeout(()=>resolve(RECEIPTS_RECOMMEND), 2000) // 2 seconds
        );
    }

    findRecommendReceipt(id: number) {
        return Promise.resolve(RECEIPTS_RECOMMEND).then(
            recommend => recommend.filter(recommend => recommend.id === id)[0]
        );
    }
}
