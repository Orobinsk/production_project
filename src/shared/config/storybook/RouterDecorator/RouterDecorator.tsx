import { StoryFn } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { BrowserRouter } from 'react-router-dom';

export const RouteDecorator = (story:()=> StoryFn) => (
    <BrowserRouter>
        {story()}
    </BrowserRouter>
);
