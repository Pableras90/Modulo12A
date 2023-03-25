import { mapMovementListFromApiToViewModel } from './movements.mappers.js';
import { addMovementRows } from './movements.helpers';
import { getMovementsByAccountId } from './movements.api';
import qs from 'qs';
import {getAccount} from '../../common/api/api.common.js';
import {mapAccountFromApiToViewModel} from '../account/account.mappers.js';

const getParams = () => {
  return qs.parse(window.location.search, { ignoreQueryPrefix: true });
}

getMovementsByAccountId(getParams().id).then(apiMovementList => { 
  const viewModelMovementList = mapMovementListFromApiToViewModel(apiMovementList);
  addMovementRows(viewModelMovementList);

  getAccount(getParams().id).then(apiAccount => {
    const viewModelAccount = mapAccountFromApiToViewModel(apiAccount);
    document.getElementById('alias').innerText = viewModelAccount.alias;
    document.getElementById('iban').innerText = viewModelAccount.iban;  
    document.getElementById('balance').innerText = viewModelAccount.balance + '€';
  });
});