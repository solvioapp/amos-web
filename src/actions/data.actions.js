import * as actionTypes from './actionTypes';
import fetch from '../helpers/redux/services/http';

export function fetchData() {
    const promise = fetch('#');
    return {
        onRequest: actionTypes.FETCH_DATA_TRIGGERED,
        onFailure: actionTypes.FETCH_DATA_FAILED,
        onSuccess: actionTypes.FETCH_DATA_SUCCESS,
        promise,
    };
}
