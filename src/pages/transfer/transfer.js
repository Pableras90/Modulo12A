import { insertTransfer, getApiAccountList } from './transfer.api';
import {
  onSubmitForm,
  onUpdateField,
  onSetError,
} from '../../common/helpers/element.helpers';
import { transferValidation } from './transfer.validations';
import { setAccountOptions } from './transfer.helpers';

const params = history.getParams();
getApiAccountList().then(apiAccount=>setAccountOptions(apiAccount,params.id));


let transfer = {
  id: '',
  accountId: '',
  iban: '',
  name: '',
  amount: '',
  concept: '',
  notes: '',
  day: '',
  month: '',
  year: '',
  email: '',
};

onUpdateField('id', (event) => {
  const value = event.target.value;
  transfer = {
    ...transfer,
    id: value,
  };
  transferValidation.validateField('id', transfer.id).then((result) => {
    onSetError('id', result);
  });
});

onUpdateField('accountId', (event) => {
  const value = event.target.value;
  transfer = {
    ...transfer,
    accountId: value,
  };
  transferValidation
    .validateField('accountId', transfer.accountId)
    .then((result) => {
      onSetError('accountId', result);
    });
});

onUpdateField('iban', (event) => {
  const value = event.target.value;
  transfer = {
    ...transfer,
    iban: value,
  };
  transferValidation.validateField('iban', transfer.iban).then((result) => {
    onSetError('iban', result);
  });
});

onUpdateField('name', (event) => {
    const value = event.target.value;
    transfer = {
      ...transfer,
      name: value,
    };
    transferValidation.validateField('name', transfer.name).then((result) => {
      onSetError('name', result);
    });
  });
  
