import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Check, X } from 'lucide-react';
import Toggle from '.';

const meta: Meta<typeof Toggle> = {
    title: 'Components/Toggle',
    component: Toggle,
    tags: ['autodocs'],
    argTypes: {
        size: {
            control: 'select',
            options: ['xs', 'sm', 'md', 'lg', 'xl'],
        },
        theme: {
            control: 'select',
            options: [
                'default',
                'neutral',
                'primary',
                'secondary',
                'accent',
                'info',
                'success',
                'warning',
                'error',
            ],
        },
    },
};
export default meta;

type Story = StoryObj<typeof Toggle>;

export const Default: Story = {
    args: {
        labelText: 'Remember me',
        fieldsetText: 'Login options',
        size: 'md',
        theme: 'primary',
        defaultChecked: true,
    },
};

export const WithIcons: Story = {
    args: {
        labelText: 'Enable feature',
        fieldsetText: 'Feature options',
        iconOn: <Check className='w-4 h-4' />,
        iconOff: <X className='w-4 h-4' />,
    },
};

export const Sizes: Story = {
    render: () => (
        <div className='flex gap-6 items-center'>
            <Toggle size='xs' labelText='XS' />
            <Toggle size='sm' labelText='SM' />
            <Toggle size='md' labelText='MD' />
            <Toggle size='lg' labelText='LG' />
            <Toggle size='xl' labelText='XL' />
        </div>
    ),
};

export const Themes: Story = {
    render: () => (
        <div className='flex flex-wrap gap-6'>
            <Toggle theme='neutral' labelText='Neutral' />
            <Toggle theme='primary' labelText='Primary' />
            <Toggle theme='secondary' labelText='Secondary' />
            <Toggle theme='accent' labelText='Accent' />
            <Toggle theme='info' labelText='Info' />
            <Toggle theme='success' labelText='Success' />
            <Toggle theme='warning' labelText='Warning' />
            <Toggle theme='error' labelText='Error' />
        </div>
    ),
};
