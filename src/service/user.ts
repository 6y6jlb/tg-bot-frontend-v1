import { BASE_ROUTE, ROUTES_ENUM } from './../const/routes';
import { IUserUpdate } from './types';

export const getUser = async (userId: string) => {

    const url = new URL(BASE_ROUTE + ROUTES_ENUM.USERS);

    url.searchParams.append('user_id', userId);

     const response = await fetch(url, {
        method: 'GET',
        mode: 'cors', 
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
    });
    await throwOnError(response);
    return response.json(); // parses JSON response into native JavaScript objects
}

export const updateUser = async (params: IUserUpdate) => {

    const url = new URL(BASE_ROUTE + ROUTES_ENUM.USERS);


     const response = await fetch(url, {
        method: 'PUT',
        mode: 'cors', 
        body: JSON.stringify(params),
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
    });
    await throwOnError(response);
    return response.json(); // parses JSON response into native JavaScript objects
}




async function throwOnError(response: Response) {
    if (response.ok) {
        return;
    }

    const json = await response.json();

    const responseError = {
        type: 'Error',
        message: json.message || response.statusText || 'Something went wrong',
        code: response.status || '',
        errors: json.errors
    };
    let error = new Error();

    error = { ...error, ...responseError };

    throw error;
};