// wrapPromise.js

import axios from "axios";

/**
 * Wraps a promise so it can be used with React Suspense
 * @param {Promise} promise The promise to process
 * @returns {Object} A response object compatible with Suspense
 */
export function wrapPromise<T>(promise: Promise<T>) {
    let status = 'pending';
    let response: T;

    const suspender = promise.then(
        res => {
            status = 'success';
            response = res;
        },
        err => {
            status = 'error';
            response = err;
        },
    );

    const handler = {
        pending: () => {
            throw suspender;
        },
        error: () => {
            throw response;
        },
        default: () => response,
    };

    const read = () => {
        //@ts-ignore
        const result = handler[status] ? handler[status]() : handler.default();
        return result;
    };

    return { read };
}

export function getDataInDelay<T>(data: T, delay: number = 1000) {
    const promise =axios.get('https://api.tvmaze.com/search/shows?q=snow').then((x) => data);
    return wrapPromise(promise);
}