import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from 'shared/ui/Modal/Modal';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta: Meta<typeof Modal> = {
    title: 'shared/Modal',
    component: Modal,
    // tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Primary: Story = {
    args: {
        isOpen: true,
        children: 'TextTextTex tTextText TextText TextTextTextText',
    },
};

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
    args: {
        isOpen: true,
        children: 'TextTextTex tTextText TextText TextTextTextText',
    },
};
