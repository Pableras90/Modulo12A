import { mapMovementFromApiToViewModel } from './movements.mappers.js';
import {addMovementRows} from './movements.helpers';
import { getMovementsByAccountId } from './movements.api';
import qs from 'qs';

const getParams = () => {
    return qs.parse(window.location.search, { ignoreQueryPrefix: true });
  }
getMovementsByAccountId(getParams().id).then(movementList)

