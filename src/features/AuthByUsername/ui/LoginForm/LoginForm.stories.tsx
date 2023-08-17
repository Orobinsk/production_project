import type { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoryDecorator/StoreDecorator';
import LoginForm from './LoginForm';

const meta: Meta<typeof LoginForm> = {
    title: 'features/LoginForm',
    component: LoginForm,
};

export default meta;
type Story = StoryObj<typeof LoginForm>;

export const Primary: Story = {
    decorators: [StoreDecorator({
        loginForm: { username: '123', password: 'asdfg' },
    })],
    args: {},
};

export const withError: Story = {
    decorators: [StoreDecorator({
        loginForm: { username: '123', password: 'asdfg', error: 'Error' },
    })],
    args: {},
};

export const loading: Story = {
    decorators: [StoreDecorator({
        loginForm: { isLoading: true },
    })],
    args: {},
};
