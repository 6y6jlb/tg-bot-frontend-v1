import { FormType } from '../components/task';
import { BASE_ROUTE, ROUTES_ENUM } from '../const/routes';
import { ITaskUpdate } from './types';

export const createTask = async (params: FormType) => {

    const url = new URL(BASE_ROUTE + ROUTES_ENUM.TASKS);


     const response = await fetch(url, {
        method: 'POST',
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

export const getTask = async (taskId: string) => {

    const url = new URL(BASE_ROUTE + ROUTES_ENUM.TASKS);

    url.searchParams.append('id', taskId);

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

export const updateTask = async (params: ITaskUpdate) => {

    const url = new URL(BASE_ROUTE + ROUTES_ENUM.TASKS);


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