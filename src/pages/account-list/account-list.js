import { getAccountList } from './account-list.api';
import { addAccountRows } from './account-list.helpers';

/*
Account{
    id: string;
    iban: string;
    name: string;
    balance: string; // number -> string €
    lastTransaction: string // string -> DD/MM/YYYY
}
*/
getAccountList().then(accountList => {
    addAccountRows(accountList);
});