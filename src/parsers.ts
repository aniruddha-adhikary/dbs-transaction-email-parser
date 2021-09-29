import { Transaction, TransactionChannel, TransactionType } from "./Transaction";

export function findTransactionId(message: string) {
    const parsedTransaction = message.match(/Transaction Ref:\s+([A-Z0-9]+)/);

    if (!parsedTransaction) {
        throw new Error('Transaction ID not found');
    }

    return parsedTransaction[1];
}

export function parsePayNowOut(message: string): Transaction {

    const transactionId = findTransactionId(message);

    return new Transaction(
        TransactionType.OUT,
        transactionId,
        new Date(),
        {
            name: 'fromName',
            accountEnding: 'accountEnding'
        },
        {
            name: 'toName',
            accountEnding: 'accountEnding'
        },
        TransactionChannel.PAYNOW
    );
}
