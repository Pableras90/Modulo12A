import {
  onSubmitForm,
  onUpdateField,
  onSetError,
  onSetFormErrors,
} from '../../common/helpers/element.helpers';
import { insertTransfer, getApiAccountList } from './transfer.api';
import { transferValidation } from './transfer.validations';
import { setAccountOptions } from './transfer.helpers';
import { mapTransferFromViewModelToApi } from './transfer.mappers';
import qs from 'qs';

const getParams = () => {
  return qs.parse(window.location.search, { ignoreQueryPrefix: true });
};

getApiAccountList().then((apiAccountList) => {
  setAccountOptions(apiAccountList, getParams().id);
  transfer.accountId = getParams().id;
});

/*Recoger parámetros de la url para ver el id de cuenta.
Recoger los valores del formulario.**
Añadir validaciones a los campos.**
Mandar la información al servidor mediante un método de la API.*/

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

onUpdateField('amount', (event) => {
  const value = event.target.value;
  transfer = {
    ...transfer,
    amount: value,
  };
  transferValidation.validateField('amount', transfer.amount).then((result) => {
    onSetError('amount', result);
  });
});
onUpdateField('concept', (event) => {
  const value = event.target.value;
  transfer = {
    ...transfer,
    concept: value,
  };
  transferValidation
    .validateField('concept', transfer.concept)
    .then((result) => {
      onSetError('concept', result);
    });
});
onUpdateField('notes', (event) => {
  const value = event.target.value;
  transfer = {
    ...transfer,
    notes: value,
  };
  transferValidation.validateField('notes', transfer.notes).then((result) => {
    onSetError('notes', result);
  });
});
onUpdateField('day', (event) => {
  const value = event.target.value;
  transfer = {
    ...transfer,
    day: value,
  };
  transferValidation.validateField('day', transfer.day).then((result) => {
    onSetError('day', result);
  });
});
onUpdateField('month', (event) => {
  const value = event.target.value;
  transfer = {
    ...transfer,
    month: value,
  };
  transferValidation.validateField('month', transfer.month).then((result) => {
    onSetError('month', result);
  });
});
onUpdateField('year', (event) => {
  const value = event.target.value;
  transfer = {
    ...transfer,
    year: value,
  };
  transferValidation.validateField('year', transfer.year).then((result) => {
    onSetError('year', result);
  });
});
onUpdateField('email', (event) => {
  const value = event.target.value;
  transfer = {
    ...transfer,
    email: value,
  };
  transferValidation.validateField('email', transfer.email).then((result) => {
    onSetError('email', result);
  });
});

const onSave = () => {
  const apiTransfer = mapTransferFromViewModelToApi(transfer);
  return insertTransfer(apiTransfer);
};

onSubmitForm('transfer-button', () => {
  transferValidation.validateForm(transfer).then((result) => {
    onSetFormErrors(result);
    if (result.succeeded) {
      onSave().then((result) => {
        history.back();
      });
    };
  });
});
