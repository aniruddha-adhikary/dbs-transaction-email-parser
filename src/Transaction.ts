export enum TransactionType {
    IN = 'IN',
    OUT = 'OUT',
}

export enum TransactionChannel {
    DBS_POSB = 'DBS_POSB',
    FAST_INTERBANK = 'FAST_INTERBANK',
    PAYLAH = 'PAYLAH',
    PAYNOW = 'PAYNOW',
}

export interface MinimalAccountDescriptor {
    name: string;
    accountEnding: string;
}

export class Transaction {
    readonly type: TransactionType;
    readonly date: Date;
    readonly from: MinimalAccountDescriptor;
    readonly to: MinimalAccountDescriptor;
    readonly channel?: TransactionChannel | null;

    constructor(
        type: TransactionType,
        date: Date, from: MinimalAccountDescriptor,
        to: MinimalAccountDescriptor,
        channel: TransactionChannel | null
    ) {
        this.type = type;
        this.date = date;
        this.from = from;
        this.to = to;
        this.channel = channel;
    }
}

export const InvalidTransaction = Symbol("Invalid Transaction");
