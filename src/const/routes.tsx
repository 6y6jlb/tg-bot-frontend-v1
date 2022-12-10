import Profile from "../components/profile";
import Weather from "../components/weather";
import Event from "../components/task";
import { EVENT_TYPE } from "./event";
import { createHashRouter } from "react-router-dom";

export const BASE_ROUTE = 'http://localhost:5000/api/'; //local
// export const BASE_ROUTE = 'http://188.166.56.12:5000'; //prod

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
}

export const PUBLIC_ROUTES = [
    {
        path: '/' + APP_ROUTES_ENUM.INDEX,
        element: <Profile />
    },
    {
        path: '/' + APP_ROUTES_ENUM.PROFILE,
        element: <Profile />
    },
    {
        path: '/' + APP_ROUTES_ENUM.WEATHER,
        element: <Weather />
    },
    {
        path: '/' + APP_ROUTES_ENUM.EVENT_REMINDER,
        element: <Event type={EVENT_TYPE.REMINDER} />
    },
    {
        path: '/' + APP_ROUTES_ENUM.EVENT_WEATHER,
        element: <Event type={EVENT_TYPE.REMINDER} />
    },
  ];

export const PUBLIC_ROUTER = createHashRouter(PUBLIC_ROUTES);
