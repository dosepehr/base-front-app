import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import React, { useState } from 'react';
import Radio from '.';

const themes = [
    'primary',
    'secondary',
    'accent',
    'info',
    'success',
    'warning',
    'error',
    'neutral',
    'default',
] as const;

const sizes = ['xs', 'sm', 'md', 'lg', 'xl'] as const;

const meta: Meta<typeof Radio> = {
    title: 'components/Radio',
    component: Radio,
    tags: ['autodocs'],
    argTypes: {
        theme: {
            control: 'select',
            options: themes,
        },
        size: {
            control: 'select',
            options: sizes,
        },
        name: { control: 'text' },
        id: { control: 'text' },
        checked: { control: 'boolean' },
    },
};

export default meta;
type Story = StoryObj<typeof Radio>;

export const Default: Story = {
    args: {
        name: 'example-group',
        id: 'radio-1',
        size: 'sm',
        theme: 'primary',
        defaultChecked: false,
    },
};

export const GroupedRadios: Story = {
    render: () => {
        const [selected, setSelected] = useState('option1');

        return (
            <div style={{ display: 'flex', gap: 24 }}>
                <label>
                    <Radio
                        name='group'
                        id='option1'
                        checked={selected === 'option1'}
                        onChange={() => setSelected('option1')}
                        theme='primary'
                        size='md'
                    />
                    Option 1
                </label>
                <label>
                    <Radio
                        name='group'
                        id='option2'
                        checked={selected === 'option2'}
                        onChange={() => setSelected('option2')}
                        theme='success'
                        size='md'
                    />
                    Option 2
                </label>
                <label>
                    <Radio
                        name='group'
                        id='option3'
                        checked={selected === 'option3'}
                        onChange={() => setSelected('option3')}
                        theme='warning'
                        size='md'
                    />
                    Option 3
                </label>
            </div>
        );
    },
};

export const AllThemes: Story = {
    render: () => {
        return (
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem' }}>
                {themes.map((theme) => (
                    <label key={theme}>
                        <Radio
                            name='theme-group'
                            id={`theme-${theme}`}
                            theme={theme}
                            size='md'
                            onChange={() => {}}
                        />
                        {theme}
                    </label>
                ))}
            </div>
        );
    },
};

export const AllSizes: Story = {
    render: () => {
        return (
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem' }}>
                {sizes.map((size) => (
                    <label key={size}>
                        <Radio
                            name='size-group'
                            id={`size-${size}`}
                            size={size}
                            theme='primary'
                            onChange={() => {}}
                        />
                        {size}
                    </label>
                ))}
            </div>
        );
    },
};

