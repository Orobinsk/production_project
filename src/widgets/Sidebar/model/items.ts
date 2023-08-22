import React from 'react';
import { RoutePatch } from 'shared/config/routeConfig/routeConfig';
import AboutIcon from 'shared/assets/icons/about.svg';
import MainIcon from 'shared/assets/icons/main.svg';
import ProfileIcon from 'shared/assets/icons/profile.svg';

export interface SidebarItemType{
    path:string;
    text:string;
    Icon:React.VFC<React.SVGProps<SVGSVGElement>>
}

export const SidebarItemsList: SidebarItemType[] = [
    {
        path: RoutePatch.main,
        Icon: MainIcon,
        text: 'Главная',
    },
    {
        path: RoutePatch.about,
        Icon: AboutIcon,
        text: 'О сайте',
    },
    {
        path: RoutePatch.profile,
        Icon: ProfileIcon,
        text: 'Профиль',
    },
];
