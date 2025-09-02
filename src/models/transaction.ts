import { CanadianTaxLocality } from '@pictaccio/admin-gui/src/models/canadian_tax_locality';
import { TransactionInfo } from '@pictaccio/admin-gui/src/models/transaction_info';

export class Transaction {
    public subtotal: number;
    public promo: number;
    public shipping: number;
    public taxes: CanadianTaxLocality;
    public total: number;
    public transactions: TransactionInfo[];
}
