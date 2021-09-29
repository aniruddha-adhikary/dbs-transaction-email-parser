import { findTransactionId } from "../../src/parsers";
import * as fs from "fs";
import * as path from "path";
import * as quotedPrintable from "quoted-printable";

describe('findTransactionId', () => {
    describe('PayNow Out', () => {
        it('extracts the transaction ID', () => {
            const contentPath = path.join(__dirname, '../templates/transaction/transfer-out-paynow.txt');
            const content = fs.readFileSync(contentPath, 'utf8');
            expect(findTransactionId(content)).toEqual('MB3501051KKK8000')
        });
    });
    describe('Credit Card Out', () => {
        it('extracts the transaction ID', () => {
            const contentPath = path.join(__dirname, '../templates/transaction/transfer-out-credit-card.txt');
            const content = fs.readFileSync(contentPath, 'utf8');
            expect(findTransactionId(content)).toEqual('28129600600')
        });
    });
    describe('FAST Out', () => {
        it('extracts the transaction ID', () => {
            const contentPath = path.join(__dirname, '../templates/transaction/transfer-out-bank-fast-interbank.txt');
            const content = fs.readFileSync(contentPath, 'utf8');
            expect(findTransactionId(content)).toEqual('28129610000')
        });
    });
    describe('Own Bank Account Out', () => {
        it('extracts the transaction ID', () => {
            const contentPath = path.join(__dirname, '../templates/transaction/transfer-out-bank-own-account.txt');
            const content = fs.readFileSync(contentPath, 'utf8');
            expect(findTransactionId(content)).toEqual('28129628000')
        });
    });
    describe('PayLah Out', () => {
        it('extracts the transaction ID', () => {
            const contentPath = path.join(__dirname, '../templates/transaction/transfer-out-paylah.html');
            const content = quotedPrintable.decode(fs.readFileSync(contentPath, 'utf8'));
            expect(findTransactionId(content)).toEqual('IPS51800211631186878')
        });
    });
})
