import type { Meta, StoryObj } from '@storybook/react';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta: Meta<typeof Text> = {
    title: 'shared/Text',
    component: Text,
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Primary: Story = {
    args: {
        title: 'Title lorem ipsun',
        text: 'Text text text',
    },
};

export const Error: Story = {
    args: {
        title: 'Title lorem ipsun',
        text: 'Text text text',
        theme: TextTheme.ERROR,
    },
};

export const onlyTitle: Story = {
    args: {
        title: 'Title lorem ipsun',
    },
};

export const onlyText: Story = {
    args: {
        text: 'Text text text',
    },
};

export const PrimaryDark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
    args: {
        title: 'Title lorem ipsun',
        text: 'Text text text',
    },
};

export const onlyTitleDark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
    args: {
        title: 'Title lorem ipsun',
    },
};

export const onlyTextDark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
    args: {
        text: 'Text text text',
    },
};
