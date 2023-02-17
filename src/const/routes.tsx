import Profile from "../components/profile";
import Weather from "../components/weather";
import Event from "../components/task";
import { EVENT_TYPE } from "./event";
import { createHashRouter } from "react-router-dom";

// export const BASE_ROUTE = 'http://localhost:5000/api/'; //local
export const BASE_ROUTE = 'https://lbas.website:5000/api/'; //prod

export const PREFIX = 'tg-bot-frontend-v1';

export enum SERVICE_ROUTES_ENUM {
    USERS = 'users',
    TASKS = 'tasks',
    WEATHER = 'weather',
}

export enum APP_ROUTES_ENUM {
    INDEX = '',
    PROFILE = 'profile',
    WEATHER = 'weather',
    EVENT_REMINDER = 'event-reminder',
    EVENT_WEATHER = 'event-weather',
    EVENT_CURRENCY = 'event-currency',
}

export const PRIVATE_ROUTES = [
    {
        path: '/' + APP_ROUTES_ENUM.INDEX,
        navTitle: 'weather',
        element: <Weather />
    },
    {
        path: '/' + APP_ROUTES_ENUM.PROFILE,
        navTitle: 'profile',
        element: <Profile />
    },
    {
        path: '/' + APP_ROUTES_ENUM.EVENT_REMINDER,
        navTitle: 'event-reminder',
        element: <Event type={EVENT_TYPE.REMINDER} />
    },
    {
        path: '/' + APP_ROUTES_ENUM.EVENT_WEATHER,
        navTitle: 'event-weather',
        element: <Event type={EVENT_TYPE.WEATHER} />
    },
  ];

  export const PUBLIC_ROUTES = [
    {
        path: '/' + APP_ROUTES_ENUM.INDEX,
        navTitle: 'weather',
        element: <Weather />
    },
  ];

export const PUBLIC_ROUTER = createHashRouter(PUBLIC_ROUTES);
export const PRIVATE_ROUTER = createHashRouter(PRIVATE_ROUTES);
