/**
* An array of routes that are accessible to the public
* These routes do not require authentication
* @type {string[]}
*/
export const publicRoutes = [
    "/",
    "/auth/new-verification",
    "/auth/new-password",
];

/**
* An array of routes that are used for authentication
* These routes will redirect logged in users to the settings page
* @type {string[]}
*/
export const authRoutes = [
    "/auth/login",
    "/auth/register",
    "/auth/reset",
];

/**
* The prefix for the authentication API routes
* Routes that start with this prefix are used for API authentication pusposes
* @type {string}
*/
export const apiAuthPrefix = "/api/auth";

/**
* The default redirect route for logged in users
* @type {string}
*/
export const DEFAULT_LOGIN_REDIRECT = "/settings";