import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Navbar } from 'widgets/NavBar';
import { StoreDecorator } from 'shared/config/storybook/StoryDecorator/StoreDecorator';

const meta: Meta<typeof Navbar> = {
    title: 'widget/Navbar',
    component: Navbar,
};

export default meta;
type Story = StoryObj<typeof Navbar>;

export const Light: Story = {
    decorators: [StoreDecorator({})],
    args: {},
};

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({})],
    args: {
    },
};

export const AuthNavbar: Story = {
    decorators: [StoreDecorator({
        user: { authData: {} },
    })],
    args: {
    },
};
