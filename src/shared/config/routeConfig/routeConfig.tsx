import { RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { ProfilePage } from 'pages/ProfilePage';

export enum AppRoute {
    MAIN = 'main',
    ABOUT = 'about',
    PROFILE = 'profile',

    // last
    NOT_FOUND = 'not_found',
}

export const RoutePatch: Record<AppRoute, string> = {
    [AppRoute.MAIN]: '/',
    [AppRoute.ABOUT]: '/about',
    [AppRoute.PROFILE]: '/profile',
    // последний
    [AppRoute.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRoute, RouteProps> = {
    [AppRoute.MAIN]: {
        path: RoutePatch.main,
        element: <MainPage />,
    },
    [AppRoute.ABOUT]: {
        path: RoutePatch.about,
        element: <AboutPage />,
    },
    [AppRoute.PROFILE]: {
        path: RoutePatch.profile,
        element: <ProfilePage />,
    },

    // last
    [AppRoute.NOT_FOUND]: {
        path: RoutePatch.not_found,
        element: <NotFoundPage />,
    },
};
