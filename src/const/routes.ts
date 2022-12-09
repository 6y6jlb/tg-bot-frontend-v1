export const BASE_ROUTE = 'http://localhost:5000/api/'; //local
// export const BASE_ROUTE = 'http://188.166.56.12:5000'; //prod

export enum ROUTES_ENUM {
    USERS = 'users',
    TASKS = 'tasks',
    WEATHER = 'weather',
}

export const USERS_ROUTES = {
    [ROUTES_ENUM.USERS]: ['GET', 'POST', 'PUT', 'DELETE']
};

export const TASKS_ROUTES = {
    [ROUTES_ENUM.TASKS]: ['GET', 'POST', 'PUT', 'DELETE']
}

export const WEATER_ROUTES = {
    [ROUTES_ENUM.WEATHER]: ['GET']
}
export const API_ROUTES = {
    USERS_ROUTES, TASKS_ROUTES
};