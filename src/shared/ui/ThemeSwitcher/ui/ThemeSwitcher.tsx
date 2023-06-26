import {classNames} from "shared/lib/classNames/classNames";
import cls from './ThemeSwitcher.module.scss';
import React from "react";
import {Theme, useTheme} from "app/providers/ThemeProvider";
import LightIcons from 'shared/assets/icons/theme-light.svg'
import DarkIcons from 'shared/assets/icons/theme-dark.svg'
import {Button, ThemeButton} from "shared/ui/Button/Button";


interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = ({className}: ThemeSwitcherProps) => {
    const {theme, toggleTheme} = useTheme();

    return (
        <Button
            theme={ThemeButton.CLEAR}
            className={classNames(cls.ThemeSwitcher,{},[className])}
                onClick={toggleTheme}>
            {theme===Theme.DARK? <DarkIcons/>:<LightIcons/>}
        </Button>
    );
};