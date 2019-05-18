import 'isomorphic-fetch';
import { store } from '../store/configure-store';

export default (url, opts) => {
    const optsHeaders = opts ? opts.headers : {};
    const newOpts = {
        ...opts,
        headers: {
            Accept: 'application/json;charset=UTF-8',
            'Content-Type': 'application/json',
            ...optsHeaders,
        },
    };
    const { token } = store.getState().user;
    if (token.accessToken) {
        newOpts.headers = {
            ...newOpts.headers,
            Authorization: `Bearer ${token.accessToken}`,
        };
    }
    return fetch(url, newOpts);
};
