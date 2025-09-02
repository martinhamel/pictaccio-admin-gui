export type OrderPromoFlag = {
    code: string;
    amount: string;
}

export type OrderFlags = {
    promo: OrderPromoFlag,
    free_shipping: boolean,
    digital_email_sent_date: Date
}
