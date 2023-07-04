import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { ErrorPage } from 'widgets/ErrorPage/ui/ErrorPage';

const meta: Meta<typeof ErrorPage> = {
    title: 'widget/ErrorPage',
    component: ErrorPage,
    // tags: ['autodocs'],
    argTypes: {

    },
};

export default meta;
type Story = StoryObj<typeof ErrorPage>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Light: Story = {
    args: {},
};

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
    args: {
    },
};
