import { BASE_ROUTE, SERVICE_ROUTES_ENUM } from '../const/routes';
import { throwOnError } from './error';
import { IWeatherParams } from './types';

export const getWeather = async (params: IWeatherParams) => {

    const url = new URL(BASE_ROUTE + SERVICE_ROUTES_ENUM.WEATHER);

    for (const param in params) {
        //@ts-ignore
        url.searchParams.append(param, params[param]);
    }

    const response = await fetch(url, {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
            'Content-Security-Policy': 'upgrade-insecure-requests'
        },
    });
    await throwOnError(response);
    return response.json(); // parses JSON response into native JavaScript objects
}



