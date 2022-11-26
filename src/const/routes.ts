export const BASE_ROUTE = 'http://localhost:5000/api/';

export enum ROUTES_ENUM {
    USERS = 'users',
    TASKS = 'tasks',
}

export const USERS_ROUTES = {
    [ROUTES_ENUM.USERS]: ['GET', 'POST', 'PUT', 'DELETE']
};

export const TASKS_ROUTES = {
    [ROUTES_ENUM.TASKS]: ['GET', 'POST', 'PUT', 'DELETE']
}
export const API_ROUTES = {
    USERS_ROUTES, TASKS_ROUTES
};