import { Meta, StoryObj } from '@storybook/react';
import Button from '.';

type Story = StoryObj<typeof Button>;

const meta: Meta<typeof Button> = {
    title: 'components/Button',
    component: Button,
    tags: ['autodocs'],
};

export default meta;

// === STORIES === //

export const Default: Story = {
    args: {
        children: 'Default Button',
        theme: 'primary',
        variant: 'default',
        size: 'md',
        shape: 'default',
        isAnimated: false,
        isDisabled: false,
        isLoading: false,
        isLink: false,
    },
};

export const Loading: Story = {
    args: {
        children: 'Loading Button',
        isLoading: true,
        loadingText: 'در حال بارگذاری',
        theme: 'success',
    },
};


export const Disabled: Story = {
    args: {
        children: 'Disabled',
        isDisabled: true,
        theme: 'neutral',
    },
};

export const Outline: Story = {
    args: {
        children: 'Outline Button',
        variant: 'outline',
        theme: 'secondary',
    },
};

export const Circle: Story = {
    args: {
        children: 'C',
        shape: 'circle',
        theme: 'warning',
    },
};

export const BlockWide: Story = {
    args: {
        children: 'Block Button',
        shape: 'block',
        theme: 'error',
    },
};

