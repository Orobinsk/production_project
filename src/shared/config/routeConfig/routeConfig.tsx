import { RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';

export enum AppRoute{
    MAIN='main',
    ABOUT='about',
}

export const RoutePatch: Record<AppRoute, string> = {
    [AppRoute.MAIN]: '/',
    [AppRoute.ABOUT]: '/about',
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
};
