const parseResponse = (response) => {
    switch (response.status) {
        case 204: {
            return {};
        }
        default: {
            const contentType = response.headers.get('Content-Type');
            return !contentType || contentType.indexOf('json') > -1 ? response.json() : response.text();
        }
    }
};


const checkStatus = (response) => {
    if (response.status >= 200 && response.status < 300) {
        return response;
    }

    const contentType = response.headers.get('Content-Type');
    if (!contentType || contentType.indexOf('json') > -1) {
    // When not 2xx, it will end up here...
        return response.json().then((data) => {
            const error = new Error(response.statusText);
            error.response = {
                data,
                statusCode: response.status,
            };
            throw error;
        });
    }
    return response.text();
};

export default function promiseMiddleware({ dispatch, getState }) {
    return next => (action) => {
        const { promise, onRequest, onSuccess, onFailure, ...rest } = action;
        if (!promise) {
            // if action dispatched is not a promise, just send it to the next processor
            return next(action);
        }

        if (onRequest) {
            if (typeof onRequest === 'function') {
                onRequest(dispatch, getState, rest);
            } else {
                dispatch({ type: onRequest, ...rest });
            }
        }

        return promise
            .then(checkStatus)
            .then(parseResponse)
            .then((response) => {
                try {
                    if (typeof onSuccess === 'function') {
                        return onSuccess(response, dispatch, getState, rest);
                    }
                    return dispatch({ type: onSuccess, response, ...rest });
                } catch (e) {
                    e.message = `Action success error: ${e.message}`;
                    e.type = 'ActionError';
                    throw e;
                }
            })
            .catch((error) => {
                if ((error.type !== 'FormError' || error.type === 'Unauthorized') && onFailure) {
                    if (typeof onFailure === 'function') {
                        return onFailure(error.response, dispatch, getState, rest);
                    }
                    return dispatch({ type: onFailure, error: error.response, ...rest });
                }
                throw error;
            });
    };
}
